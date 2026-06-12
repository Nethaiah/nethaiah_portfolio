"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  Loader2Icon,
  SendIcon,
} from "lucide-react";
import * as React from "react";
import { Controller, type Resolver, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactPurposes, type ContactPurpose } from "@/lib/contact";
import {
  contactFormDefaultValues,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

type TextFieldName = Exclude<keyof ContactFormValues, "is_anonymous">;
const resolveContactForm = zodResolver as unknown as (
  schema: typeof contactFormSchema,
) => Resolver<ContactFormValues>;

function getDateFromValue(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  if (!(year && month && day)) {
    return undefined;
  }

  return new Date(year, month - 1, day);
}

function getDateValue(date: Date) {
  return format(date, "yyyy-MM-dd");
}

function buildPayload(values: ContactFormValues) {
  const anonymousFeedback =
    values.purpose === "Feedback" && values.is_anonymous === true;
  const payload: Record<string, string | boolean> = {
    purpose: values.purpose,
    is_anonymous: anonymousFeedback,
  };

  if (!anonymousFeedback) {
    payload.email = values.email.trim();

    if (values.username.trim()) {
      payload.username = values.username.trim();
    }
  }

  if (values.purpose === "Schedule a Call") {
    payload.preferred_date = values.preferred_date;
    payload.preferred_time = values.preferred_time;
    payload.additional_notes = values.additional_notes.trim();
  }

  if (values.purpose === "Collaboration" || values.purpose === "Feedback") {
    payload.message = values.message.trim();
  }

  return payload;
}

export function LetsTalkModal() {
  const [open, setOpen] = React.useState(false);
  const form = useForm<ContactFormValues>({
    resolver: resolveContactForm(contactFormSchema),
    defaultValues: contactFormDefaultValues,
    mode: "onSubmit",
  });
  const purpose = form.watch("purpose");
  const isAnonymous = form.watch("is_anonymous");
  const preferredTime = form.watch("preferred_time");
  const anonymousFeedback = purpose === "Feedback" && isAnonymous === true;
  const isSubmitting = form.formState.isSubmitting;
  const [datePickerOpen, setDatePickerOpen] = React.useState(false);

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildPayload(values)),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || result?.ok !== true) {
        throw new Error(result?.error || "Unable to send your message.");
      }

      toast.success("Message sent.");
      form.reset(contactFormDefaultValues);
      setOpen(false);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    }
  }

  function renderTextField({
    name,
    label,
    type = "text",
    autoComplete,
    textarea = false,
  }: {
    name: TextFieldName;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    autoComplete?: string;
    textarea?: boolean;
  }) {
    return (
      <Controller
        name={name}
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
            {textarea ? (
              <Textarea
                {...field}
                id={field.name}
                className="min-h-24"
                aria-invalid={fieldState.invalid}
              />
            ) : (
              <Input
                {...field}
                id={field.name}
                type={type}
                autoComplete={autoComplete}
                aria-invalid={fieldState.invalid}
              />
            )}
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    );
  }

  function renderScheduleCallFields() {
    return (
      <FieldGroup>
        <Controller
          name="preferred_date"
          control={form.control}
          render={({ field, fieldState }) => {
            const selectedDate = getDateFromValue(field.value);
            const timeState = form.getFieldState(
              "preferred_time",
              form.formState,
            );

            return (
              <Field data-invalid={fieldState.invalid || timeState.invalid}>
                <FieldLabel htmlFor={field.name}>Date and Time</FieldLabel>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        type="button"
                        variant="outline"
                        data-empty={!selectedDate}
                        id={field.name}
                        className="w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                      />
                    }
                  >
                    <CalendarDaysIcon data-icon="inline-start" />
                    {selectedDate
                      ? `${format(selectedDate, "PPP")} at ${preferredTime}`
                      : "Pick a date and time"}
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-auto min-w-[var(--anchor-width)] p-0"
                  >
                    <div className="flex flex-col divide-y bg-background">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        captionLayout="dropdown"
                        defaultMonth={selectedDate}
                        className="mx-auto [--cell-size:2.5rem]"
                        onSelect={(date) => {
                          field.onChange(date ? getDateValue(date) : "");
                        }}
                      />
                      <div className="flex flex-col gap-2 p-4">
                        <FieldLabel htmlFor="preferred_time">Time</FieldLabel>
                        <Input
                          id="preferred_time"
                          type="time"
                          value={preferredTime}
                          onChange={(event) =>
                            form.setValue(
                              "preferred_time",
                              event.target.value,
                              {
                                shouldDirty: true,
                                shouldValidate: true,
                              },
                            )
                          }
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                {timeState.invalid && <FieldError errors={[timeState.error]} />}
              </Field>
            );
          }}
        />
      </FieldGroup>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button
            type="button"
            className="group flex w-full items-center gap-4 border border-border bg-card px-4 py-4 text-left transition-colors hover:border-primary/40 hover:text-primary"
          />
        }
      >
        <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
          <CalendarDaysIcon className="size-4" />
        </span>
        <span className="flex flex-1 flex-col gap-1">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            Let&apos;s Talk
          </span>
          <span className="text-sm text-foreground transition-colors group-hover:text-primary">
            Schedule a call
          </span>
        </span>
        <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
      </DialogTrigger>

      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Let&apos;s Talk</DialogTitle>
          <DialogDescription>
            One contact point for calls, collaborations, and feedback.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit, () =>
            toast.error("Check the required fields."),
          )}
          noValidate
        >
          <FieldGroup>
            {!anonymousFeedback && (
              <FieldGroup className="sm:grid sm:grid-cols-2">
                {renderTextField({
                  name: "email",
                  label: "Email",
                  type: "email",
                  autoComplete: "email",
                })}
                {renderTextField({
                  name: "username",
                  label: "Username",
                  autoComplete: "name",
                })}
              </FieldGroup>
            )}

            <Controller
              name="purpose"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Purpose</FieldLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value as ContactPurpose);
                      form.clearErrors();
                      if (value !== "Feedback") {
                        form.setValue("is_anonymous", false);
                      }
                    }}
                  >
                    <SelectTrigger
                      id={field.name}
                      className="w-full"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {contactPurposes.map((contactPurpose) => (
                          <SelectItem
                            key={contactPurpose}
                            value={contactPurpose}
                          >
                            {contactPurpose}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {purpose === "Schedule a Call" && (
              <>
                {renderScheduleCallFields()}

                {renderTextField({
                  name: "additional_notes",
                  label: "Additional Notes",
                  textarea: true,
                })}
              </>
            )}

            {purpose === "Collaboration" &&
              renderTextField({
                name: "message",
                label: "Collaboration Details",
                textarea: true,
              })}

            {purpose === "Feedback" && (
              <>
                <Controller
                  name="is_anonymous"
                  control={form.control}
                  render={({ field }) => (
                    <Field orientation="horizontal">
                      <Checkbox
                        id={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldContent>
                        <FieldLabel htmlFor={field.name}>
                          Submit Anonymously
                        </FieldLabel>
                      </FieldContent>
                    </Field>
                  )}
                />
                {renderTextField({
                  name: "message",
                  label: "Feedback Message",
                  textarea: true,
                })}
              </>
            )}

            <DialogFooter className="m-0 border-0 bg-transparent p-0 sm:justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <Loader2Icon
                    data-icon="inline-start"
                    className="animate-spin"
                  />
                ) : (
                  <SendIcon data-icon="inline-start" />
                )}
                {isSubmitting ? "Sending" : "Send Message"}
              </Button>
            </DialogFooter>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}

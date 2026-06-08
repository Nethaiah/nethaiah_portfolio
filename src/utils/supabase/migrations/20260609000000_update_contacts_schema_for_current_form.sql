alter table public.contacts
  drop constraint if exists contacts_purpose_check,
  drop constraint if exists contacts_meeting_type_check;

alter table public.contacts
  drop column if exists project_description,
  drop column if exists budget,
  drop column if exists timeline,
  drop column if exists meeting_type,
  drop column if exists topic;

alter table public.contacts
  add constraint contacts_purpose_check
  check (purpose in ('Schedule a Call', 'Collaboration', 'Feedback')) not valid;

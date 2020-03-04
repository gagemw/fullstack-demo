drop database if exists bugreporting;
create database bugreporting;
\c bugreporting;

create table bugs(
  "bugName" serial primary key,
  "bugDescription" text,
  "reportedBy" text,
  "createdDate" text default (to_char(CURRENT_DATE, 'MM/DD/YYYY')),
  "assignedTo" text, 
  "threatLevel" text
);

insert into bugs ("bugDescription","reportedBy","assignedTo","threatLevel") values 
  ('Async Swim needs to be fixed, desperately.','Bailey','Teddi','Critical'),
  ('Do you support the Phantom Thieves?','Jeff','Daniel','Low-Priority'),
  ('Unit test #202200324 is failing on Jeffs computer','Daniel','Bailey','Low-Priority'),
  ('Wax on','Bailey','Teddi','Important'),
  ('Wax off','Bailey','Teddi','Important'),
  ('Totally not a generic bug','Nick','Surj','Critical');
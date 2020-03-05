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

insert into bugs ("bugDescription","reportedBy","assignedTo","threatLevel","createdDate") values 
  ('Async Swim needs to be fixed, desperately.','Bailey','Teddi','Critical','01/05/2020'),
  ('Do you support the Phantom Thieves?','Jeff','Daniel','Low-Priority','01/05/2020'),
  ('Unit test #202200324 is failing on Jeff''s computer','Daniel','Bailey','Low-Priority','01/06/2020'),
  ('Wax on','Bailey','Teddi','Important','01/06/2020'),
  ('Wax off','Bailey','Teddi','Important','01/07/2020'),
  ('Totally not a generic bug','Nick','Surj','Critical','01/07/2020');
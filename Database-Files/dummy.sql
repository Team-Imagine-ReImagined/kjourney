
insert into capLead (name, photo, message)
values ('Bane Bafferty', 'image link', 'I have no idea what im doing please send help');
insert into capLead (name, photo, message)
values ('Conor McCormick', 'image link', 'Im in charge of AI and Josh');


insert into capability (name, leadID)
values ('Sales & Marketing', 1);
insert into capability (name, leadID)
values ('Technical', 1);
insert into capability (name, leadID)
values ('Consulting', 1);
insert into capability (name, leadID)
values ('Experience Design', 1);
insert into capability (name, leadID)
values ('Management', 1);
insert into capability (name, leadID)
values ('Central Services Teams', 1);


insert into band (name, level)
values ('Executive', 1);
insert into band (name, level)
values ('Leadership Community', 1);
insert into band (name, level)
values ('Principal', 1);
insert into band (name, level)
values ('Manager', 1);
insert into band (name, level)
values ('Consultant', 1);
insert into band (name, level)
values ('Senior Associate', 1);
insert into band (name, level)
values ('Associate', 1);
insert into band (name, level)
values ('Trainee', 1);
insert into band (name, level)
values ('Apprentice', 1);


insert into jobFam (name, capID)
values ('Business Development', 1);
insert into jobFam (name, capID)
values ('Account Management', 1);
insert into jobFam (name, capID)
values ('Sales', 1);
insert into jobFam (name, capID)
values ('Inside Sales Development', 1);
insert into jobFam (name, capID)
values ('Pre Sales & Bid Management', 1);
insert into jobFam (name, capID)
values ('Marketing', 1);
insert into jobFam (name, capID)
values ('Software Engineering', 2);
insert into jobFam (name, capID)
values ('Data Engineering', 2);
insert into jobFam (name, capID)
values ('Cyber Security', 2);
insert into jobFam (name, capID)
values ('Architect', 2);
insert into jobFam (name, capID)
values ('Ops', 2);
insert into jobFam (name, capID)
values ('Infrastructure', 2);
insert into jobFam (name, capID)
values ('Testing', 2);
insert into jobFam (name, capID)
values ('Analytics', 2);
insert into jobFam (name, capID)
values ('Integration', 2);
insert into jobFam (name, capID)
values ('Product Specialist', 2);
insert into jobFam (name, capID)
values ('Product Support', 2);
insert into jobFam (name, capID)
values ('Technical Specialist', 2);
insert into jobFam (name, capID)
values ('Product', 3);
insert into jobFam (name, capID)
values ('Agile', 3);
insert into jobFam (name, capID)
values ('HCM', 3);
insert into jobFam (name, capID)
values ('Research', 4);
insert into jobFam (name, capID)
values ('UX Design', 4);
insert into jobFam (name, capID)
values ('Creative Design', 4);
insert into jobFam (name, capID)
values ('Service Design', 4);
insert into jobFam (name, capID)
values ('Project Management', 5);
insert into jobFam (name, capID)
values ('Support Management', 5);
insert into jobFam (name, capID)
values ('Finance & PMO', 6);
insert into jobFam (name, capID)
values ('Commercial', 6);
insert into jobFam (name, capID)
values ('People', 6);
insert into jobFam (name, capID)
values ('Facilities', 6);
insert into jobFam (name, capID)
values ('Administration', 6);
insert into jobFam (name, capID)
values ('Travel', 6);
insert into jobFam (name, capID)
values ('Strategy', 6);
insert into jobFam (name, capID)
values ('Systems', 6);

insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Head of Business Unit', "Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.",
'www.google.com', 1, 1);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Head of Business Unit', "Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.",
'www.google.com', 2, 1);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Director', "Does sales and stuff",
'www.google.com', 1, 2);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Director', "Does sales and stuff",
'www.google.com', 2, 2);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Business Development Director', "Recognised leader and developer of Kainos talent, continuously improves Kainos, comfortable in novel situations, owns multiple initiatives, accountable for delivery at Programme level.",
'www.google.com', 1, 3);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Account Director', "Recognised leader and developer of Kainos talent, continuously improves Kainos, comfortable in novel situations, owns multiple initiatives, accountable for delivery at Programme level.",
'www.google.com', 2, 3);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Business Development Manager', "Serves the company's commercial and delivery interests, owns single initiatives or projects, advocates effective coaching and ensures that it happens.",
'www.google.com', 1, 4);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Lead Software Engineer', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
'www.google.com', 7, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Lead Data Engineer', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
'www.google.com', 8, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Software Engineer', "Delivers with limited supervision, trusted to make tactical decisions.",
'www.google.com', 7, 6);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Data Engineer', "Delivers with limited supervision, trusted to make tactical decisions.",
'www.google.com', 8, 6);
insert into jobRole (name, summary, link, specLink, jobFamID, bandID)
values ('Security Engineer', "Works within teams to establish good security practices, supporting the design, development and testing of the service being delivered for both application and infrastructure.",
'www.google.com', 'https://kainossoftwareltd.sharepoint.com/:w:/r/sites/CyberSecurity/_layouts/15/Doc.aspx?sourcedoc=%7B57E6C79D-489D-46BC-8E1E-FA97BF124C4C%7D&file=5%20Associate%20Security%20Engineer.docx&action=default&mobileredirect=true', 9, 7);
insert into jobRole (name, summary, link, specLink, jobFamID, bandID)
values ('Security Architect', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
'www.google.com', 'https://kainossoftwareltd.sharepoint.com/:w:/r/sites/CyberSecurity/_layouts/15/Doc.aspx?sourcedoc=%7BAFF6A3C7-8E7D-4CFC-9882-AA18CA4408CD%7D&file=3%20Security%20Architect.docx&action=default&mobileredirect=true', 9, 5);


insert into training(name, description)
values ('Management Course', 'Learn how to manage little baby developers');
insert into training(name, description)
values ('SA Development', 'Learn the new responsibilities required in your new role');

insert into competency(title)
values ('Commercial Awareness');
insert into competency(title)
values ('Communicating & Teamwork');
insert into competency(title)
values ('Innovation & Continous Improvement');
insert into competency(title)
values ('Customer Focus');
insert into competency(title)
values ('Developing Yourself & Others');
insert into competency(title)
values ('Planning & Organising');
insert into competency(title)
values ('Job Specific Knowledge');


insert into responsibilities (respDesc)
values ('Develop talent within your team, ensuring SMARTER stretch and project goals are clearly defined');
insert into responsibilities (respDesc)
values ('Provide anytime performance feedback on Workday to each of your team members at least once a quarter');
insert into responsibilities (respDesc)
values ('Identify training needs for team members and report to the BU talent manager');
insert into responsibilities (respDesc)
values ('Participate, and encourage your people to participate, in recruitment activities');


insert into comp_Band(compID, bandID, compDesc)
values (1, 2, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 2, 'You achieve widely accepted buy in by explaining benefits at both individual and department level' );

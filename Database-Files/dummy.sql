insert into capLead (name, photo, message)
values ('Bane Bafferty', 'image link', 'I have no idea what im doing please send help.');
insert into capLead (name, photo, message)
values ('Conor McCormick', 'image link', 'Im in charge of AI and Josh.');
insert into capLead (name, photo, message)
values ('Roisin Goodman', 'image link', 'Oh look another video with me in it!!!');
insert into capLead (name, photo, message)
values ('Chris Thompson', 'image link', 'Im literally so swole check my biceps m8.');
insert into capLead (name, photo, message)
values ('Thomas Boyle', 'image link', 'Lad, are you serious lad? Lad.');
insert into capLead (name, photo, message)
values ('Eoin McCoy', 'image link', 'Anyone for Sbubby?');


insert into capability (name, leadID)
values ('Sales & Marketing', 1);
insert into capability (name, leadID)
values ('Technical', 2);
insert into capability (name, leadID)
values ('Consulting', 3);
insert into capability (name, leadID)
values ('Experience Design', 4);
insert into capability (name, leadID)
values ('Management', 5);
insert into capability (name, leadID)
values ('Central Services Teams', 6);


insert into band (name, level)
values ('Executive', 0);
insert into band (name, level)
values ('Leadership Community', 1);
insert into band (name, level)
values ('Principal', 2);
insert into band (name, level)
values ('Manager', 3);
insert into band (name, level)
values ('Consultant', 4);
insert into band (name, level)
values ('Senior Associate', 5);
insert into band (name, level)
values ('Associate', 6);
insert into band (name, level)
values ('Trainee', 7);
insert into band (name, level)
values ('Apprentice', 7);


insert into jobFam (name, capID)
values ('Business Development', 1);
insert into jobFam (name, capID)
values ('Account Management', 1);
insert into jobFam (name, capID)
values ('Sales', 1);
insert into jobFam (name, capID)
values ('Software Engineering', 2);
insert into jobFam (name, capID)
values ('Data Engineering', 2);
insert into jobFam (name, capID)
values ('Cyber Security', 2);
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
values ('Project Management', 5);
insert into jobFam (name, capID)
values ('Support Management', 5);
insert into jobFam (name, capID)
values ('Finance & PMO', 6);
insert into jobFam (name, capID)
values ('Commercial', 6);
insert into jobFam (name, capID)
values ('People', 6);

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
values ('Business Development Manager', "Serves the company's commercial and delivery interests, owns single initiatives or projects, advocates effective coaching and ensures that it happens.",
        'www.google.com', 1, 4);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Account Manager', "Serves the company's commercial and delivery interests, owns single initiatives or projects, advocates effective coaching and ensures that it happens.",
        'www.google.com', 2, 4);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Junior Business Development Manager', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
        'www.google.com', 1, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Junior Account Manager', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
        'www.google.com', 2, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Head of Business Unit', "Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.",
        'www.google.com', 3, 1);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Director', "Does sales and stuff.",
        'www.google.com', 3, 2);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Senior Sales Executive', "Recognised leader and developer of Kainos talent, continuously improves Kainos, comfortable in novel situations, owns multiple initiatives, accountable for delivery at Programme level.",
        'www.google.com', 3, 3);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Executive', "Serves the company's commercial and delivery interests, owns single initiatives or projects, advocates effective coaching and ensures that it happens.",
        'www.google.com', 3, 4);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Executive', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
        'www.google.com', 3, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Associate', "Delivers with limited supervision, trusted to make tactical decisions.",
        'www.google.com', 3, 6);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Sales Associate', "Established deliverer, works well in a team.",
        'www.google.com', 3, 7);

insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Lead Software Engineer', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
        'www.google.com', 4, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Lead Data Engineer', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
        'www.google.com', 5, 5);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Software Engineer', "Delivers with limited supervision, trusted to make tactical decisions.",
        'www.google.com', 4, 6);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Data Engineer', "Delivers with limited supervision, trusted to make tactical decisions.",
        'www.google.com', 5, 6);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Software Engineer', "Established deliverer, works well in a team.",
        'www.google.com', 4, 7);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Data Engineer', "Established deliverer, works well in a team.",
        'www.google.com', 5, 7);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Software Engineer', "Graduate entry level, here to learn, but primarily to contribute to projects.",
        'www.google.com', 4, 8);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Trainee Data Engineer', "Graduate entry level, here to learn, but primarily to contribute to projects.",
        'www.google.com', 5, 8);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Software Engineer', "Here primarily to learn; contributes to projects.",
        'www.google.com', 4, 9);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Senior Security Architect', "Serves the company's commercial and delivery interests, owns single initiatives or projects, advocates effective coaching and ensures that it happens.",
        'www.google.com', 6, 3);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Security Architect', "Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.",
        'www.google.com', 6, 4);
insert into jobRole (name, summary, link, jobFamID, bandID)
values ('Security Engineer', "Works within teams to establish good security practices, supporting the design, development and testing of the service being delivered for both application and infrastructure. Is viewed as an authority figure for cyber security and will bring strong technical leadership including mentoring and coaching Kainos people, to strengthen our security capability across the organisation.",
        'www.google.com', 6, 5);


insert into training(name, description, trainingType)
values ('People Manager Toolkit', 'Learn how to manage little baby developers', 'Technical skills');
insert into training(name, description, trainingType)
    values ('SA Development', 'Learn the responsibilities required in your new role', 'Professional skills');
insert into training(name, description, trainingType)
values ('Kainos as a Business', 'Learn how Kainos business processes operate', 'Development programmes');
insert into training(name, description, trainingType)
values ('Influencing Others', 'Learn how to work with a team and positively influence your colleagues', 'Professional skills');
insert into training(name, description, trainingType)
values ('Coaching - Foundation', 'Learn the basics of mentoring and teaching colleagues', 'Technical skills');
insert into training(name, description, trainingType)
values ('Consultant Development', 'Learn the responsibilities required in your new role', 'Professional skills');
insert into training(name, description, trainingType)
values ('Certified Scrum Master', 'Learn how to lead an agile team', 'Development programmes');


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
insert into responsibilities (respDesc)
values ('Deliver training as part of MAP');
insert into responsibilities (respDesc)
values ('Encourage collaboration across BUs');
insert into responsibilities (respDesc)
values ('Identify and mentor high-potential, junior talent and expedite their personal development');
insert into responsibilities (respDesc)
values ('Represent Kainos at careers fairs or Kainos open evenings events if invited');
insert into responsibilities (respDesc)
values ('Deliver your tasks within the timelines while adhering to the Kainos quality standards');
insert into responsibilities (respDesc)
values ('Immediately tell your manager if your tasks are not going to be complete within the expected timeframe');


insert into comp_Band(compID, bandID, compDesc)
values (1, 1, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 1, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 1, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 1, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 1, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 1, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 1, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 2, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 2, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 2, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 2, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 2, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 2, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 2, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 3, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 3, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 3, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 3, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 3, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 3, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 3, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 4, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 4, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 4, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 4, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 4, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 4, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 4, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 5, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 5, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 5, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 5, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 5, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 5, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 5, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 6, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 6, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 6, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 6, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 6, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 6, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 6, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 7, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 7, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 7, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 7, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 7, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 7, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 7, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 8, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 8, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 8, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 8, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 8, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 8, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 8, 'You provide opportunities for others to learn functional and technical skills and concepts' );
insert into comp_Band(compID, bandID, compDesc)
values (1, 9, 'You take a balanced view of wider impact on the organisation when making significant changes' );
insert into comp_Band(compID, bandID, compDesc)
values (2, 9, 'You role model company values, even when there is significant risk in doing so' );
insert into comp_Band(compID, bandID, compDesc)
values (3, 9, 'You understand that proposed innovation and changes should have a clear link to improving the business results delivered' );
insert into comp_Band(compID, bandID, compDesc)
values (4, 9, 'You manage expectations so customers always feels valued and have a positive experience of Kainos' );
insert into comp_Band(compID, bandID, compDesc)
values (5, 9, 'You tailor development approaches to suit the needs of each team member' );
insert into comp_Band(compID, bandID, compDesc)
values (6, 9, 'You organise people and resources to successfully achieve both short and medium term objectives' );
insert into comp_Band(compID, bandID, compDesc)
values (7, 9, 'You provide opportunities for others to learn functional and technical skills and concepts' );

insert into band_Training(bandID, trainingID) values (1, 1);
insert into band_Training(bandID, trainingID) values (1, 2);
insert into band_Training(bandID, trainingID) values (1, 3);
insert into band_Training(bandID, trainingID) values (1, 4);
insert into band_Training(bandID, trainingID) values (5, 5);
insert into band_Training(bandID, trainingID) values (6, 6);
insert into band_Training(bandID, trainingID) values (7, 7);
insert into band_Training(bandID, trainingID) values (8, 1);
insert into band_Training(bandID, trainingID) values (9, 2);


insert into resp_Band(respID, bandID) values (1, 1);
insert into resp_Band(respID, bandID) values (2, 2);
insert into resp_Band(respID, bandID) values (3, 3);
insert into resp_Band(respID, bandID) values (4, 4);
insert into resp_Band(respID, bandID) values (5, 5);
insert into resp_Band(respID, bandID) values (6, 6);
insert into resp_Band(respID, bandID) values (7, 7);
insert into resp_Band(respID, bandID) values (8, 8);
insert into resp_Band(respID, bandID) values (9, 9);


insert into resp_Role(respID, roleID) values (1, 1);
insert into resp_Role(respID, roleID) values (2, 2);
insert into resp_Role(respID, roleID) values (3, 3);
insert into resp_Role(respID, roleID) values (4, 4);
insert into resp_Role(respID, roleID) values (5, 5);
insert into resp_Role(respID, roleID) values (6, 6);
insert into resp_Role(respID, roleID) values (7, 7);
insert into resp_Role(respID, roleID) values (8, 8);
insert into resp_Role(respID, roleID) values (9, 9);
insert into resp_Role(respID, roleID) values (1, 10);
insert into resp_Role(respID, roleID) values (2, 11);
insert into resp_Role(respID, roleID) values (3, 12);
insert into resp_Role(respID, roleID) values (4, 13);
insert into resp_Role(respID, roleID) values (5, 14);

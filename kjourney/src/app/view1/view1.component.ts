import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as nomnoml from 'nomnoml';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  encapsulation: ViewEncapsulation.None
})
export class View1Component implements OnInit {

 // TODO: Rethink this solution. Is there any way we could replace this with something more interactive? More customised to the user?

  constructor() { }

  public source = ['[Business Development|\n' +
    '[<role>Head of Business Unit (Executive)]->[<role>Sales Director (LeadershipCommunity)]\n ' +
    '[<role>Sales Director (LeadershipCommunity)]->[<role>Business Development Director (Principal)]\n ' +
    '[<role>Business Development Director (Principal)]->[<role>Business Development Manager (Manager)]\n ' +
    '[<role>Business Development Manager (Manager)]->[<role>Junior Business Development Manager (Consultant)]\n ' +
    ']\n',
    '[Account Management|\n' +
    '[<role>Head of Business Unit (Executive)]->[<role>Sales Director (LeadershipCommunity)]\n ' +
    '[<role>Sales Director (LeadershipCommunity)]->[<role>Account Director (Principal)]\n ' +
    '[<role>Account Director (Principal)]->[<role>Account Manager (Manager)]\n ' +
    '[<role>Account Manager (Manager)]->[<role>Junior Account Manager (Consultant)]\n ' +
    ']\n',
    '[Sales|\n' +
    '[<role>Head of Business Unit (Executive)]->[<role>Sales Director (LeadershipCommunity)]\n ' +
    '[<role>Sales Director (LeadershipCommunity)]->[<role>Senior Sales Executive (Principal)]\n ' +
    '[<role>Senior Sales Executive (Principal)]->[<role>Sales Executive (Manager)]\n ' +
    '[<role>Sales Executive (Manager)]->[<role>Sales Executive (Consultant)]\n ' +
    '[<role>Sales Executive (Consultant)]->[<role>Sales Associate (SeniorAssociate)]\n ' +
    '[<role>Sales Associate (SeniorAssociate)]->[<role>Sales Associate (Associate)]\n ' +
    ']\n',
    '[Inside Sales Development|\n' +
    '[<role>Head of Business Unit (Executive)]->[<role>Sales Director (LeadershipCommunity)]\n ' +
    '[<role>Sales Director (LeadershipCommunity)]->[<role>Country Manager (Principal)]\n ' +
    '[<role>Country Manager (Principal)]->[<role>Territory Manager (Manager)]\n ' +
    '[<role>Territory Manager (Manager)]->[<role>Territory Manager (Consultant)]\n ' +
    '[<role>Territory Manager (Consultant)]->[<role>Senior Sales Development Representative (SeniorAssociate)]\n ' +
    '[<role>Senior Sales Development Representative (SeniorAssociate)]->[<role>Sales Development Representative (Associate)]\n ' +
    '[<role>Sales Development Representative (Associate)]->[<role>Sales Development Representative (Trainee)]\n ' +
    ']\n',
    '[Pre-Sales & Bid Management|\n' +
    '[<role>Head of Business Unit (Executive)]->[<role>Sales Director (LeadershipCommunity)]\n ' +
    '[<role>Sales Director (LeadershipCommunity)]->[<role>Senior Presales Manager (Principal)]\n ' +
    '[<role>Senior Presales Manager (Principal)]->[<role>Presales Manager (Manager)]\n ' +
    '[<role>Presales Manager (Manager)]->[<role>Senior Presales Consultant (Consultant)]\n ' +
    '[<role>Senior Presales Consultant (Consultant)]->[<role>Presales Consultant (SeniorAssociate)]\n ' +
    '[<role>Presales Consultant (SeniorAssociate)]->[<role>Presales Associate (Associate)]\n ' +
    '[<role>Presales Associate (Associate)]->[<role>Trainee Presales Associate (Trainee)]\n ' +
    ']\n',
    '[Marketing|\n' +
    '[<role>Head of Business Unit (Executive)]->[<role>Marketing Leader (LeadershipCommunity)]\n ' +
    '[<role>Marketing Leader (LeadershipCommunity)]->[<role>Senior Marketing Manager (Principal)]\n ' +
    '[<role>Senior Marketing Manager (Principal)]->[<role>Marketing Manager (Manager)]\n ' +
    '[<role>Marketing Manager (Manager)]->[<role>Senior Marketing Executive (Consultant)]\n ' +
    '[<role>Senior Marketing Executive (Consultant)]->[<role>Marketing Executive (SeniorAssociate)]\n ' +
    '[<role>Marketing Executive (SeniorAssociate)]->[<role>Marketing Associate (Associate)]\n ' +
    '[<role>Marketing Associate (Associate)]->[<role>Marketing Assistant (Trainee)]\n ' +
    ']\n',
    '[Software Engineering|\n' +
    '[<role>Lead Software Engineer (Consultant)]->[<role>Software Engineer (SeniorAssociate)]\n ' +
    '[<role>Software Engineer (SeniorAssociate)]->[<role>Software Engineer (Associate)]\n ' +
    '[<role>Software Engineer (Associate)]->[<role>Software Engineer (Trainee)]\n ' +
    '[<role>Software Engineer (Trainee)]->[<role>Software Engineer (Apprentice)]\n ' +
    ']\n',
    '[Data Engineering|\n' +
    '[<role>Lead Data Engineer (Consultant)]->[<role>Data Engineer (SeniorAssociate)]\n ' +
    '[<role>Data Engineer (SeniorAssociate)]->[<role>Data Engineer (Associate)]\n ' +
    '[<role>Data Engineer (Associate)]->[<role>Trainee Data Engineer (Trainee)]\n ' +
    ']\n',
    '[Cyber Security|\n' +
    '[<role>Senior Security Architect (Manager)]->[<role>Security Architect (Consultant)]\n ' +
    '[<role>Security Architect (Consultant)]->[<role>Security Engineer (SeniorAssociate)]\n ' +
    ']\n',
    '[Architect|\n' +
    '[<role>Chief Technology Officer (Executive)]->[<role>Technology Leader (LeadershipCommunity)]\n ' +
    '[<role>Technology Leader (LeadershipCommunity)]->[<role>Principal Architect (Principal)]\n ' +
    '[<role>Principal Architect (Principal)]->[<role>Solution Architect (Manager)]\n ' +
    '[<role>Solution Architect (Manager)]->[<role>Technical Architect (Consultant)]\n ' +
    ']\n',
    '[Ops|\n' +
    '[<role>Lead Ops Engineer (Consultant)]->[<role>Ops Engineer (SeniorAssociate)]\n ' +
    '[<role>Ops Engineer (SeniorAssociate)]->[<role>Ops Engineer (Associate)]\n ' +
    '[<role>Ops Engineer (Associate)]->[<role>Ops Engineer (Trainee)]\n ' +
    ']\n',
    '[Infrastructure|\n' +
    '[<role>Infrastructure Leader (LeadershipCommunity)]->[<role>Infrastructure Consultant (Consultant)]\n ' +
    '[<role>Infrastructure Consultant (Consultant)]->[<role>Infrastructure Engineer (SeniorAssociate)]\n ' +
    '[<role>Infrastructure Engineer (SeniorAssociate)]->[<role>Infrastructure Engineer (Associate)]\n ' +
    '[<role>Infrastructure Engineer (Associate)]->[<role>Infrastructure Engineer (Trainee)]\n ' +
    '[<role>Infrastructure Engineer (Trainee)]->[<role>Infrastructure Engineer (Apprentice)]\n ' +
    ']\n',
    '[Testing|\n' +
    '[<role>Test Manager (Manager)]->[<role>Lead Test Engineer (Consultant)]\n ' +
    '[<role>Lead Test Engineer (Consultant)]->[<role>Test Engineer (SeniorAssociate)]\n ' +
    '[<role>Test Engineer (SeniorAssociate)]->[<role>Test Engineer (Associate)]\n ' +
    '[<role>Test Engineer (Associate)]->[<role>Test Engineer (Trainee)]\n ' +
    '[<role>Test Engineer (Trainee)]->[<role>Test Engineer (Apprentice)]\n ' +
    ']\n',
    '[Analytics|\n' +
    '[<role>Principal Data Consultant (Principal)]->[<role>Data Architect (Manager)]\n ' +
    '[<role>Data Architect (Manager)]->[<role>Data Scientist (Consultant)]\n ' +
    '[<role>Data Scientist (Consultant)]->[<role>Data Scientist (SeniorAssociate)]\n ' +
    '[<role>Data Scientist (SeniorAssociate)]->[<role>Data Consultant (Associate)]\n ' +
    '[<role>Data Consultant (Associate)]->[<role>Data Scientist (Trainee)]\n ' +
    ']\n',
    '[Integration|\n' +
    '[<role>Lead Integration Consultant (Manager)]->[<role>Integration Consultant (Consultant)]\n ' +
    '[<role>Integration Consultant (Consultant)]->[<role>Integration Consultant (SeniorAssociate)]\n ' +
    '[<role>Integration Consultant (SeniorAssociate)]->[<role>Integration Consultant (Associate)]\n ' +
    '[<role>Integration Consultant (Associate)]->[<role>Integration Consultant (Trainee)]\n ' +
    ']\n',
    '[Product Specialist|\n' +
    '[<role>Lead Product Specialist (Consultant)]->[<role>Product Specialist (SeniorAssociate)]\n ' +
    '[<role>Product Specialist (SeniorAssociate)]->[<role>Product Specialist (Associate)]\n ' +
    '[<role>Product Specialist (Associate)]->[<role>Product Specialist (Trainee)]\n ' +
    ']\n',
    '[Product Support|\n' +
    '[<role>Product Support Engineer (SeniorAssociate)]->[<role>Product Support Engineer (Associate)]\n ' +
    '[<role>Product Support Engineer (Associate)]->[<role>Product Support Engineer (Trainee)]\n ' +
    ']\n',
    '[TechnicalSpecialist|\n' +
    '[<role>Technical Consultant (Manager)]->[<role>Technical Consultant (Consultant)]\n ' +
    '[<role>Technical Consultant (Consultant)]->[<role>Technical Consultant (SeniorAssociate)]\n ' +
    ']\n',
    '[Product|\n' +
    '[<role>Product Principal (Principal)]->[<role>Product Lead (Manager)]\n ' +
    '[<role>Product Lead (Manager)]->[<role>Product Consultant (Consultant)]\n ' +
    '[<role>Product Consultant (Consultant)]->[<role>Senior Associate Analyst (SeniorAssociate)]\n ' +
    '[<role>Senior Associate Analyst (SeniorAssociate)]->[<role>Associate Analyst (Associate)]\n ' +
    ']\n',
    '[Agile|\n' +
    '[<role>Agile Principal (Principal)]->[<role>Agile Lead (Manager)]\n ' +
    '[<role>Agile Lead (Manager)]->[<role>Agile Consultant (Consultant)]\n ' +
    '[<role>Agile Consultant (Consultant)]->[<role>Agile Specialist (SeniorAssociate)]\n ' +
    ']\n',
    '[HCM|\n' +
    '[<role>Principal HCM (Principal)]->[<role>HCM Manager (Manager)]\n ' +
    '[<role>HCM Manager (Manager)]->[<role>HCM Consultant (Consultant)]\n ' +
    '[<role>HCM Consultant (Consultant)]->[<role>HCM Consultant (SeniorAssociate)]\n ' +
    '[<role>HCM Consultant (SeniorAssociate)]->[<role>HCM Consultant (Associate)]\n ' +
    '[<role>HCM Consultant (Associate)]->[<role>HCM Consultant (Trainee)]\n ' +
    ']\n',
    '[Research|\n' +
    '[<role>Principal Researcher (Principal)]->[<role>User Research Lead (Manager)]\n ' +
    '[<role>User Research Lead (Manager)]->[<role>User Research Consultant (Consultant)]\n ' +
    '[<role>User Research Consultant (Consultant)]->[<role>User Researcher (SeniorAssociate)]\n ' +
    '[<role>User Researcher (SeniorAssociate)]->[<role>User Researcher (Associate)]\n ' +
    '[<role>User Researcher (Associate)]->[<role>User Researcher (Trainee)]\n ' +
    ']\n',
    '[UX Design|\n' +
    '[<role>Principal Designer (Principal)]->[<role>Design Lead (Manager)]\n ' +
    '[<role>Design Lead (Manager)]->[<role>Design Consultant (Consultant)]\n ' +
    '[<role>Design Consultant (Consultant)]->[<role>Designer (SeniorAssociate)]\n ' +
    '[<role>Designer (SeniorAssociate)]->[<role>Designer (Associate)]\n ' +
    '[<role>Designer (Associate)]->[<role>Designer (Trainee)]\n ' +
    ']\n',
    '[Creative Design|\n' +
    '[<role>Creative Director (Principal)]->[<role>Art Director (Manager)]\n ' +
    '[<role>Art Director (Manager)]->[<role>Design Consultant (Consultant)]\n ' +
    '[<role>Design Consultant (Consultant)]->[<role>Designer (SeniorAssociate)]\n ' +
    '[<role>Designer (SeniorAssociate)]->[<role>Designer (Associate)]\n ' +
    '[<role>Designer (Associate)]->[<role>Designer (Trainee)]\n ' +
    ']\n',
    '[Service Design|\n' +
    '[<role>Principal Service Designer (Principal)]->[<role>Service Design Lead (Manager)]\n ' +
    '[<role>Service Design Lead (Manager)]->[<role>Service Design Consultant (Consultant)]\n ' +
    ']\n',
    '[Project Management|\n' +
    '[<role>Head of Delivery (Executive)]->[<role>Delivery Leader (LeadershipCommunity)]\n ' +
    '[<role>Delivery Leader (LeadershipCommunity)]->[<role>Delivery Manager (Principal)]\n ' +
    '[<role>Delivery Manager (Principal)]->[<role>Project Manager (Manager)]\n ' +
    '[<role>Project Manager (Manager)]->[<role>Team Leader (Consultant)]\n ' +
    ']\n',
    '[Support Management|\n' +
    '[<role>Head of Support Services (Executive)]->[<role>Delivery Manager (Principal)]\n ' +
    '[<role>Delivery Manager (Principal)]->[<role>Service Delivery Manager (Manager)]\n ' +
    '[<role>Service Delivery Manager (Manager)]->[<role>Customer Service Manager (Consultant)]\n ' +
    ']\n',
    '[Finance & PMO|\n' +
    '[<role>Finance Leader (LeadershipCommunity)]->[<role>Finance Manager (Principal)]\n ' +
    '[<role>Finance Manager (Principal)]->[<role>Finance Manager (Manager)]\n ' +
    '[<role>Finance Manager (Manager)]->[<role>Finance Consultant (Consultant)]\n ' +
    '[<role>Finance Consultant (Consultant)]->[<role>Senior Finance Associate (SeniorAssociate)]\n ' +
    '[<role>Senior Finance Associate (SeniorAssociate)]->[<role>Finance Associate (Associate)]\n ' +
    '[<role>Finance Associate (Associate)]->[<role>Trainee Finance Associate (Trainee)]\n ' +
    ']\n',
    '[Commercial|\n' +
    '[<role>General Counsel (Executive)]->[<role>Associate General Counsel (LeadershipCommunity)]\n ' +
    '[<role>Associate General Counsel (LeadershipCommunity)]->[<role>Associate General Counsel (Principal)]\n ' +
    '[<role>Associate General Counsel (Principal)]->[<role>Commercial / Corporate Manager (Manager)]\n ' +
    '[<role>Commercial / Corporate Manager (Manager)]->[<role>Commercial / Corporate Consultant (Consultant)]\n ' +
    '[<role>Commercial / Corporate Consultant (Consultant)]->[<role>Senior Commercial Associate / Assistant (SeniorAssociate)]\n ' +
    '[<role>Senior Commercial Associate / Assistant (SeniorAssociate)]->[<role>Commercial Assistant (Associate)]\n ' +
    ']\n',
    '[People|\n' +
    '[<role>Head of People & Talent Development (Executive)]->[<role>People Manager (Principal)]\n ' +
    '[<role>People Manager (Principal)]->[<role>People Manager (Manager)]\n ' +
    '[<role>People Manager (Manager)]->[<role>Lead People Consultant (Consultant)]\n ' +
    '[<role>Lead People Consultant (Consultant)]->[<role>Senior People Consultant (SeniorAssociate)]\n ' +
    '[<role>Senior People Consultant (SeniorAssociate)]->[<role>People Associate (Associate)]\n ' +
    '[<role>People Associate (Associate)]->[<role>Junior People Associate (Trainee)]\n ' +
    ']\n',
    '[Facilities|\n' +
    '[<role>Facilities Manager (Principal)]->[<role>Facilities Manager (Manager)]\n ' +
    '[<role>Facilities Manager (Manager)]->[<role>Lead Facilities Consultant (Consultant)]\n ' +
    '[<role>Lead Facilities Consultant (Consultant)]->[<role>Senior Facilities Consultant (SeniorAssociate)]\n ' +
    '[<role>Senior Facilities Consultant (SeniorAssociate)]->[<role>Facilities Associate (Associate)]\n ' +
    ']\n',
    '[Administration|\n' +
    '[<role>Administrative Consultant (Consultant)]->[<role>Senior Administrative Associate (SeniorAssociate)]\n ' +
    '[<role>Senior Administrative Associate (SeniorAssociate)]->[<role>Administrative Associate (Associate)]\n ' +
    '[<role>Administrative Associate (Associate)]->[<role>Administrative Associate (Trainee)]\n ' +
    ']\n',
    '[Travel|\n' +
    '[<role>Travel Consultant (Consultant)]->[<role>Senior Travel Associate (SeniorAssociate)]\n ' +
    '[<role>Senior Travel Associate (SeniorAssociate)]->[<role>Travel Associate (Associate)]\n ' +
    ']\n',
    '[Strategy|\n' +
    '[<role>Strategic Planning Manager (Manager)]\n' +
    ']\n',
    '[Systems|\n' +
    '[<role>Lead Systems Engineer (Consultant)]->[<role>Senior Systems Engineer (SeniorAssociate)]\n ' +
    '[<role>Senior Systems Engineer (SeniorAssociate)]->[<role>Systems Engineer (Associate)]\n ' +
    ']\n'];

  public pos = 0;

  public changeGraph(offset) {
      this.pos += offset;
      if (this.pos < 0) {
        this.pos += this.source.length;
      } else if (this.pos >= this.source.length) {
        this.pos -= this.source.length;
      }
      this.drawGraph(this.pos);
  }

  public drawGraph(pos) {
    let prevPos = pos - 1;
    let nextPos = pos + 1;

    if (prevPos < 0) {
      prevPos += this.source.length;
    }

    if (nextPos >= this.source.length) {
      nextPos -= this.source.length;
    }

    const output = '#.role: fill=#FFFFFF\n ' + this.source[prevPos] + this.source[pos] + this.source[nextPos];
    const canvas = document.getElementById('target-canvas');
    nomnoml.draw(canvas, output);
  }

  ngOnInit() {
    this.drawGraph(this.pos)
  }

}

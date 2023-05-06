import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	quarterlyData = [
		{
			title: 'Q3 2022',
			list: ['Product idea', 'Market analysis', 'Tokenomics', 'Team recuitment'],
		},
		{
			title: 'Q4 2022',
			list: ['Brand Strategy', 'Product roadmap', 'Parterships'],
		},
		{
			title: 'Q1 2023',
			list: ['Whitepaper ', 'Social media ', 'Community building'],
			list2: ['ICO Start', 'ICO marketing campaign'],
		},
		{
			title: 'Q2 2023',
			list: ['End of ICO', 'Recruitment ', 'Product developement', 'Parterships '],
		},
		{
			title: 'Q3 2023',
			list: ['MVP release', 'Recruitment', 'Partnerships', 'Sales starts'],
		},
		{
			title: 'Q4 2023',
			list: ['Closed application alpha test registration', 'Product alpha testing', 'Product beta testing', 'First community event '],
		},
		{
			title: 'Q1 2024',
			list: ['API intergration with third-parties', 'Multi-lingual implementations', 'Parternhships'],
		},
		{
			title: 'Q2 2024',
			list: ['Full commercial launch', 'Marketing campaign'],
		},
	];

	projectMilestones = [
		{title: 'Phase 1', list: ['Define project goals and objectives', 'Create project schedule and budget', 'Identify project stakeholders']},
		{
			title: 'Phase 2',
			list: ['Create detailed project plan', 'Develop project deliverables', 'Conduct quality control'],
		},
		{
			title: 'Phase 3',
			list: ['Conduct system testing', 'Integrate project deliverables', 'Resolve defects and issues'],
		},
		{
			title: 'Phase 4',
			list: ['Deploy project to production environment', 'Train end-users on project deliverables', 'Monitor project performance'],
		},
		{
			title: 'Phase 5',
			list: ['Perform ongoing maintenance tasks', 'Provide user support', 'Update project documentation'],
		},
	];

	titleList = [
		{
			title: 'Grocery Shopping',
			list: ['Apples', 'Bananas', 'Bread', 'Eggs', 'Milk'],
		},
		{
			title: 'Household Chores',
			list: ['Vacuum the floors', 'Clean the bathroom', 'Do laundry', 'Wash the dishes'],
		},
		{
			title: 'Fitness Goals',
			list: ['Run 5 miles', 'Do 50 push-ups', 'Complete a 30-minute yoga session', 'Go for a hike'],
		},
		{
			title: 'Home Improvement Projects',
			list: ['Paint the living room', 'Install new light fixtures', 'Organize the garage', 'Replace the carpet'],
		},
		{
			title: 'Work Tasks',
			list: ['Schedule a meeting', 'Prepare a presentation', 'Send follow-up emails', 'Complete expense reports'],
		},
		{
			title: 'Travel Plans',
			list: ['Book a flight', 'Reserve a hotel room', 'Research local attractions', 'Create a packing list'],
		},
	];
}

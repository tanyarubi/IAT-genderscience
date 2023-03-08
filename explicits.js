define(['questAPI'], function(Quest){
	
	var API = new Quest();
	var isTouch = API.getGlobal().isTouch;
	
	/**
	* Page prototype
	*/

	
	API.addPagesSet('basicPage',{
		noSubmit:false, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Questionnaire',
		decline: true,
		declineText: isTouch ? 'Decline' : 'Decline to Answer', 
		autoFocus:true, 
		progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 4' : 'Page <%= pagesMeta.number %> out of 7'
	});
	
    /**
	* Question prototypes
	*/
	API.addQuestionsSet('basicQ',{
		decline: 'true',
		required : true, 		
		errorMsg: {
			required: isTouch ? "Please select an answer, or click 'Decline'" : 
			"Please select an answer, or click 'Decline to Answer'"
		},
		autoSubmit:'true',
		numericValues:'true',
		help: '<%= pagesMeta.number < 3 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});

	API.addQuestionsSet('basicSelect',{
		inherit :'basicQ',
		type: 'selectOne'
	});
	
    API.addQuestionsSet('basicDropdown',{
		inherit :'basicQ',
		type : 'dropdown',
		autoSubmit:false
	});
	

	/**
	*Specific questions
	*/	
    
     API.addQuestionsSet('factorability',{
		inherit : 'basicDropdown',
		name: 'factorability',
		stem: 'Women hold a smaller portion of the science and engineering faculty positions at top research universities than do men. The following factors are sometimes offered as reasons for this difference. Please rate how important you think each factor is for explaining this difference.<br/><br/>Different proportions of men and women are found among people with the very highest levels of math ability.',
		answers: [
		    {text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
		API.addQuestionsSet('factorhighpower',{
		inherit : 'basicDropdown',
		name: 'factorhighpower',
		stem: 'On average, men and women differ in their willingness to devote the time required by such "high-powered" positions.',
		answers: [
		    {text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
			API.addQuestionsSet('factorfamily',{
		inherit : 'basicDropdown',
		name: 'factorfamily',
		stem: 'On average, men and women differ in their willingness to spend time away from their families.',
		answers: [
		    {text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
			API.addQuestionsSet('factorinterest',{
		inherit : 'basicDropdown',
		name: 'factorinterest',
		stem: 'On average, men and women differ naturally in their scientific interest.',
		answers: [
		    {text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
		
			API.addQuestionsSet('factorencouragement',{
		inherit : 'basicDropdown',
		name: 'factorencouragement',
		stem: 'Directly or indirectly, boys and girls tend to receive different levels of encouragement for developing scientific interest.',
		answers: [
		    {text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
			API.addQuestionsSet('factordiscrimination',{
		inherit : 'basicDropdown',
		name: 'factordiscrimination',
		stem: 'On average, whether consciously or unconsciously, men are favored in hiring and promotion.',
		answers: [
		    {text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
	
	 
    
    API.addQuestionsSet('Lscience',{
		inherit : 'basicSelect',
		name: 'Lscience',
		stem: 'How strongly do you associate the following with males and females?<br/><br/><b>Science</b>',
		answers: [
		    
		    	{text:'Strongly male', value:7},
			{text:'Moderately male', value:6},
			{text:'Slightly male', value:5},
			{text:'Neither male nor female', value:4},
			{text:'Slightly female', value:3},
			{text:'Moderately female', value:2},
			{text:'Strongly female', value:1}
			
		]
	});
	
	 API.addQuestionsSet('Larts',{
		inherit : 'basicSelect',
		name: 'Larts',
		stem: 'How strongly do you associate the following with males and females?<br/><br/><b>Liberal Arts</b>',
		answers: [
		    
			{text:'Strongly male', value:7},
			{text:'Moderately male', value:6},
			{text:'Slightly male', value:5},
			{text:'Neither male nor female', value:4},
			{text:'Slightly female', value:3},
			{text:'Moderately female', value:2},
			{text:'Strongly female', value:1}
		]
	});
	
  
	
		API.addQuestionsSet('science',{
		inherit : 'basicSelect',
		name: 'science',
		stem: 'Please rate your attitude towards <b>Science.</b>',
		answers: [
			{text:'Strongly like',value:5},
			{text:'Like',value:4},
			{text:'Neither like or dislike',value:3},
			{text:'Dislike',value:2},
			{text:'Strongly dislike',value:1},
		]
	});
		
		
		
		API.addQuestionsSet('arts',{
		inherit : 'basicSelect',
		name: 'arts',
		stem: 'Please rate your attitude towards <b>Liberal Arts.</b>',
		answers: [
			{text:'Strongly like',value:5},
			{text:'Like',value:4},
			{text:'Neither like or dislike',value:3},
			{text:'Dislike',value:2},
			{text:'Strongly dislike',value:1},
		]
	});
	
		API.addQuestionsSet('goal1',{
		inherit : 'basicDropdown',
		name: 'goal1',
		stem: 'Rate the following personal-goal-statements on their importance to you:<br/><br/>Being knowledgable about <b>Science.</b>',
		answers: [
			{text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
			API.addQuestionsSet('goal2',{
		inherit : 'basicDropdown',
		name: 'goal2',
		stem: 'Being knowledgable about <b>Liberal Arts.</b>',
		answers: [
			{text:'Extremely important', value:5},
			{text:'Very important', value:4},
			{text:'Somewhat important', value:3},
			{text:'Slightly important', value:2},
			{text:'Not at all important', value:1}
			
		]
	});
		
	API.addQuestionsSet('ran9thgirls',{
		inherit : 'basicDropdown',
		name: 'ran9thgirls',
		stem: 'Suppose that ten 9th-grade girls were picked at random from a typical U.S. high school. How many would you predict will complete a calculus course before finishing high school?',
		answers: [
			{text:'0', value:0},
			{text:'1', value:1},
			{text:'2', value:2},
			{text:'3', value:3},
			{text:'4', value:4},
			{text:'5', value:5},
			{text:'6', value:6},
			{text:'7', value:7},
			{text:'8', value:8},
			{text:'9', value:9},
			{text:'10',value:10}
			
		]
	});
		
	API.addQuestionsSet('ran9thboys',{
		inherit : 'basicDropdown',
		name: 'ran9thboys',
		stem: 'Suppose that ten 9th-grade boys were picked at random from a typical U.S. high school. How many would you predict will complete a calculus course before finishing high school?',
		answers: [
			{text:'0', value:0},
			{text:'1', value:1},
			{text:'2', value:2},
			{text:'3', value:3},
			{text:'4', value:4},
			{text:'5', value:5},
			{text:'6', value:6},
			{text:'7', value:7},
			{text:'8', value:8},
			{text:'9', value:9},
			{text:'10',value:10}
			
		]
	});
		
		
	
	
	if (isTouch)
	{//Only three questions for touch
		API.addSequence([
			{
				mixer : 'random', 
				data : [
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
							questions: {inherit:'Lscience'}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'Larts'}							
							}
						]
					},
					
						{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
							questions: {inherit:'science'}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'arts'}							
							}
						]
					}
					
				]
			},
		]);
	}
	else
	{
		API.addSequence([
			//First, we present the three direct liking questions.
			{
				mixer : 'random', 
				data : [
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
							questions: {inherit:'Lscience'}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'Larts'}							
							}
						]
					},
					
						{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
							questions: {inherit:'science'}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'arts'}							
							}
						]
					}
					
				]
			},
			//Next, all the other questions
			
		
			
			
		
		
		
			{
			    
			    inherit: 'basicPage',
				questions: [ //If required would be set to true, then participants cannot select one and leave the other empty.
				{inherit:'factorability', required:true},
				{inherit:'factorhighpower', required:true},
				{inherit:'factorinterest', required:true},
				{inherit:'factorfamily', required:true},
				{inherit:'factorencouragement', required:true},
				{inherit:'factordiscrimination', required:true}
						
				]
			},
			
				{
			    
			    inherit: 'basicPage',
				questions: [ //If required would be set to true, then participants cannot select one and leave the other empty.
					{inherit:'goal1', required:true},
					{inherit:'goal2', required:true},
						
						
				]
			},
				
					{
			    
			    inherit: 'basicPage',
				questions: [ //If required would be set to true, then participants cannot select one and leave the other empty.
					{inherit:'ran9thboys', required:true},
					{inherit:'ran9thgirls', required:true},
				]
			}
						
     ]);
	}
	
	return API.script;
	    
	});


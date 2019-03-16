let prompts = [
    ["I've been romantic and imaginative.", 4, 
     "I've been pragmatic and down to earth.", 1],
    ["I have tended to take on confrontations.", 6,
     "I have tended to avoid confrontations.", 0],
    ["I have typically been diplomatic, charming, and ambitious.", 2,
     "I have typically been direct, formal, and idealistic.", 3],
    ["I have tended to be focused and intense.", 7,
     "I have tended to be spontaneous and fun-loving.", 8],
    ["I have been a hospitable person and have enjoyed welcoming new friends into my life.", 5,
     "I have been a private person and have not mixed much with others.", 4],
    ["Generally, it's been easy to 'get a rise' out of me.", 1,
     "Generally, it's been difficult to 'get a rise' out of me.", 0],
    ["I've been more of a 'street-smart' survivor.", 6,
     "I've been more of a 'high-minded' idealist.", 3],
    ["I have needed to show affection to people.", 5,
     "I have preferred to maintain a certain distance with people.", 7],
    ["When presented with a new experience, I've usually asked myself if it would be useful to me.", 2,
     "When presented with a new experience, I've usually asked myself if it would be enjoyable.", 8],
    ["I have tended to focus too much on myself.", 4,
     "I have tended to focus too much on others.", 0],
    ["Others have depended on my insight and knowledge.", 7,
     "Others have depended on my strength and decisiveness.", 3],
    ["I have come across as being unsure of myself.", 1,
     "I have come across as being too sure of myself.", 3],
    ["I have been more relationship-oriented than goal-oriented.", 5,
     "I have been more goal-oriented than relationship-oriented.", 2],
    ["I have not been able to speak up for myself very well.", 4,
     "I have been outspoken - I've said what others wish they had the nerve to say.", 8],
    ["It's been difficult for me to stop considering alternatives and do something definite.", 7,
     "It's been difficult for me to take it easy and be flexible.", 3],
    ["I have tended to be hesitant and procrastinating.", 1,
     "I have tended to be bold and domineering.", 6],
    ["My reluctance to get too involved has gotten me into trouble with people.", 0,
     "My eagerness to have people depend on me has gotten me into trouble with them.", 5],
    ["Usually, I have been able to put my feelings aside to get the job done.", 2,
     "Usually, I have needed to work through my feelings before I could act.", 4],
    ["Generally, I have been methodical and cautious.", 1,
     "Generally, I have been adventurous and taken risks.", 8],
    ["I have tended to be a supportive, giving person who enjoys the company of others.", 5,
     "I have tended to be a serious, reserved person who likes discussing issues.", 3],
    ["I've often felt the need to be a 'pillar of strength'.", 6,
     "I've often felt the need to perform perfectly.", 2],
    ["I've typically been interested in asking tough questions and maintaining my independence.", 7,
     "I've typically been interested in maintaining my stability and peace of mind.", 0],
    ["I've been too hard-nosed and skeptical.", 1,
     "I've been too soft-hearted and sentimental.", 5],
    ["I've often worried that I'm missing out on something better.", 8,
     "I've often worried that if I let down my guard, someone will take advantage of me.", 6],
    ["My habit of being 'stand-offish' has annoyed people.", 4,
     "My habit of telling people what to do has annoyed people.", 3],
    ["Usually when troubles have gotten to me, I have been able to \"tune them out\".", 0,
     "Usually when troubles have gotten to me I have treated myself to something I've enjoyed.", 8],
    ["I have depended upon my friends and they have known that they can depend on me.", 1,
     "I have not depended on people; I have done things on my own.", 2],
    ["I have tended to be detached and preoccupied.", 7,
     "I have tended to be moody and self-absorbed.", 4],
    ["I have liked to challenge people and \"shake them up\".", 6,
     "I have liked to comfort people and calm them down.", 5],
    ["I have tenderally been an outgoing, sociable person.", 8,
     "I have generally been an earnest, self-disciplined person.", 3],
    ["I've usually been shy about showing my abilities.", 0,
     "I've usually liked to let people know what I can do well.", 2],
    ["Pursuing my personal interests has been more important to me than having comfort and security.", 7,
     "Having comfort and security has been more important to me than pursuing my personal interests.", 1],
    ["When I've had conflict with others, I've tended to withdraw.", 4,
     "When I've had conflict with others, I've rarely backed down.", 6],
    ["I have given in too easily and let others push me around.", 0,
     "I have been too uncompromising and demanding with others.", 3],
    ["I've been appreciated for my unsinkable spirit and great sense of humor.", 8,
     "I've been appreciated for my quiet strength and exceptional generosity.", 5],
    ["Much of my success has been due to my talent for making a favorable impression.", 2,
     "Much of my success has been achieved despite my lack of interest in developing \"interpersonal skills\".", 7]
]

let actualTypes = [9, 6, 3, 1, 4, 2, 8, 5, 7];
let names = ["The Reformer", "The Helper", "The Achiever", "The Individualist", "The Investigator", "The Loyalist",
             "The Enthusiast", "The Challenger", "The Peacemaker"]

let count = 1;
let next = document.getElementById("next");
let first = document.getElementById("first");
let second = document.getElementById("second");
let content = document.getElementById("content");

let personalities = [0, 0, 0, 0, 0, 0, 0, 0, 0];

next.onclick = nextQuestion;

function calculate(score){
    let max = 0;
    for (i = 1; i < score.length; i++){
        if (score[i] > score[max]){
            max = i;
        }
    }
    let type = actualTypes[max];
    return type + ", " + names[type-1];
}

function nextQuestion() {

    if (count >= prompts.length){
        content.innerHTML = "<h2>Your type might be " + calculate(personalities) + 
                            "!</h2> <br/>Find out more about the enneagram types <a href='https://www.enneagraminstitute.com/type-descriptions'> here</a>.";
    }
    
    else{
        if (!first.checked && !second.checked) {
            throw alert("Please make a selection!");
        }
        
        if (first.checked) {
            personalities[prompts[count-1][1]]++;
            first.checked = false;
        }
        
        if (second.checked) {
            personalities[prompts[count-1][3]]++;
            second.checked = false;
        }
        
        document.getElementById("statementOne").innerHTML = prompts[count][0];
        document.getElementById("statementTwo").innerHTML = prompts[count][2];
        
        count++;
    }
    
}

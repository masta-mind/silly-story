const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk.
When they got to :inserty:, they stared in horror for a few moments, then :insertz:. 
Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

const insertX = [
    'Willy the Goblin',
    'Big Daddy0',
    'Father Christmas'
]

const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
]

const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
]


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let 
    xitem = randomValueFromArray(insertX), 
    yitem= randomValueFromArray(insertY), 
    zitem = randomValueFromArray(insertZ);

    newStory = newStory
                .replaceAll(':insertx:', xitem)
                .replaceAll(':inserty:', yitem)
                .replaceAll(':insertz:', zitem);

    
    

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stones';
    const temperature =  Math.round(94 * -17.2222222) +  ' centigrades';
    newStory = newStory
                .replaceAll('94 fahrenheit', temperature)
                .replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

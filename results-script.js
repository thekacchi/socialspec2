var answersList = JSON.parse(localStorage.getItem('answersList')) || {};

function copyTextToClipboard(textToCopy) {
        // Create a temporary input element
        var tempInput = document.createElement('input');
        
        // Set its value to the text you want to copy
        tempInput.value = textToCopy;
        
        // Append it to the document
        document.body.appendChild(tempInput);
        
        // Select the text in the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy the selected text to the clipboard
        
        document.execCommand('copy');
        
        // Remove the temporary input element
        document.body.removeChild(tempInput);
        
        // Alert or perform any other action to indicate successful copying
        alert('Link copied to clipboard: ' + textToCopy);
    }
    
    
// Function to display interpretation based on user's choices
function displayInterpretation() {
    
    var display11 = document.getElementById('1-1');
    if (answersList['1-1'] === "large") {
        display11.innerHTML = 'You see the world as large.';
    } else if (answersList['1-1'] === "small") {
        display11.innerHTML = 'You have a vast personality.';
    } else if (answersList['1-1'] === "verySmall") {
        display11.innerHTML = 'You live in a small world.';
    } else {
        display11.innerHTML = 'Error: Unable to determine interpretation (1-1).';
    }
    
        
    var display12 = document.getElementById('1-2');
    if (answersList['1-2'] === "grassy") {
        display12.innerHTML = 'You are feeling optimistic.';
    } else if (answersList['1-2'] === "dried") {
        display12.innerHTML = 'You are feeling pessimistic.';
    } else if (answersList['1-2'] === "trimmed") {
        display12.innerHTML = 'You are analytical and cautious.';
    } else {
        display12.innerHTML = 'Error: Unable to determine interpretation (1-2).';
    }
    
    var display21 = document.getElementById('2-1');
    if (answersList['2-1'] === "sugar") {
        display21.innerHTML = 'You embody a graceful humility, sometimes even downplaying your achievements and contributions';
    } else if (answersList['2-1'] === "car") {
        display21.innerHTML = 'You exude confidence while maintaining a refreshing touch of modesty.';
    } else if (answersList['2-1'] === "house") {
        display21.innerHTML = 'You are self-assured, exuding confidence in yourself and your achievements.';
    } else {
        display21.innerHTML = 'Error: Unable to determine interpretation (2-1).';
    }
    
    var display22 = document.getElementById('2-2');
    if (answersList['2-2'] === "smooth") {
        display22.innerHTML = 'You are a gentle person who avoids hurting others or making them uncomfortable. Even if it means hiding the truth from them.';
    } else if (answersList['2-2'] === "rough") {
        display22.innerHTML = 'You are straightforward, always telling the truth, even if it might affect the person you are talking to.';
    } else if (answersList['2-2'] === "bumpy") {
        display22.innerHTML = 'You frequently find faults in others, sometimes to make them feel inferior to you.';
    } else {
        display22.innerHTML = 'Error: Unable to determine interpretation (2-2).';
    }
    
    var display23 = document.getElementById('2-3');
    if (answersList['2-3'] === "red") {
        display23.innerHTML = 'You like to actively engage in physical activities and savor vibrant sensory encounters.';
    } else if (answersList['2-3'] === "yellow") {
        display23.innerHTML = 'You are outgoing and social but you cherish your unique individuality.';
    } else if (answersList['2-3'] === "blue") {
        display23.innerHTML = 'You are intelligent, and you respect other peoples ideals';
    } else if (answersList['2-3'] === "violet") {
        display23.innerHTML = 'You are intelligent, and also a but of a perfectionist. You are also mysterious';
    } else if (answersList['2-3'] === "grey") {
        display23.innerHTML = 'You are self-confident, independent, resilent and not easily fazed';
    } else if (answersList['2-3'] === "black") {
        display23.innerHTML = 'You have a strong sense of individuality and independence, and you put a high value on alone time.';
    } else if (answersList['2-3'] === "white") {
        display23.innerHTML = 'You are kind, independent, and self-reliant.';
    } else {
        display23.innerHTML = 'Error: Unable to determine interpretation (2-3).';
    }
    
    var display24 = document.getElementById('2-4');
    if (answersList['2-4'] === "fluid") {
        display24.innerHTML = 'You let external elements influence you completely. Your personality is sensitive to social pressure, relationships, and other environmental factors.';
    } else if (answersList['2-4'] === "hollow") {
        display24.innerHTML = 'You are primarily concerned with your outside appearance, with far less care for what is going on within. However, this does not mean that you have nothing to offer on the inside.';
    } else if (answersList['2-4'] === "hard") {
        display24.innerHTML = 'You have solid integrity. Your personality is so strong that it cannot be bent or influenced by any external force. You are dominant and consistent.';
    } else {
        display24.innerHTML = 'Error: Unable to determine interpretation (2-4).';
    }
    
    var display25 = document.getElementById('2-5');
    if (answersList['2-5'] === "transparent") {
        display25.innerHTML = 'You tend to let others know how you feel on the inside. You are confident enough to show your inner thoughts, and you are deeply sincere. You know that you are good inside, and guess what—it shows! That is what most people see in you as well.';
    } else if (answersList['2-5'] === "opaque") {
        display25.innerHTML = 'You tend to avoid opening up to peple due to fear or a desire to protect yourself from vulnerability ar judgement. You are more cautious, or hesitant to share your true feelings, keeping a guard up to shield yourself emotionally.';
    } else {
        display25.innerHTML = 'Error: Unable to determine interpretation (2-5).';
    }
    
    var display31 = document.getElementById('3-1');
    if (answersList['3-1'] === "short") {
        display31.innerHTML = 'Your goals are realistic and simple.';
    } else if (answersList['3-1'] === "long") {
        display31.innerHTML = 'Your goals are more far fetched and difficult to attain.';
    } else {
        display31.innerHTML = 'Error: Unable to determine interpretation (3-1).';
    }
    
    var display32 = document.getElementById('3-2');
    if (answersList['3-2'] === "close") {
        display32.innerHTML = 'You are putting maximum effort and focus into achieving those goals.';
    } else if (answersList['3-2'] === "far") {
        display32.innerHTML = 'You are not putting much thought or effort into achieving your goals for now';
    } else {
        display32.innerHTML = 'Error: Unable to determine interpretation (3-2).';
    }
    
    var display33 = document.getElementById('3-3');
    if (answersList['3-3'] === "much") {
        display33.innerHTML = 'You have a hard time opening up to people and letting them get close to you.';
    } else if (answersList['3-3'] === "little") {
        display33.innerHTML = 'You are very close with your friends.';
    } else if (answersList['3-3'] === "leaning") {
        display33.innerHTML = 'Your friends can lean on you for support.';
    } else {
        display33.innerHTML = 'Error: Unable to determine interpretation (3-2).';
    }
    
    var display41 = document.getElementById('4-1');
    if (answersList['4-1'] === "brownh") {
        display41.innerHTML = 'You prize comfort and reliability above all else. Otherwise, you do not have a specific set of expectations for your partner.';
    } else if (answersList['4-1'] === "blackh") {
        display41.innerHTML = 'Your idea partner is dominant, seductive, and sophisticated.';
    } else if (answersList['4-1'] === "whiteh") {
        display41.innerHTML = 'You value loyalty and trust more than anything else in a relationship.';
    } else if (answersList['4-1'] === "none") {
        display41.innerHTML = 'You value originality and independence in a partner. You want to be with someone who fascinates and challenges you.';
    } else {
        display41.innerHTML = 'Error: Unable to determine interpretation (4-1).';
    }
    
    var display42 = document.getElementById('4-2');
    if (answersList['4-2'] === "playing") {
        display42.innerHTML = 'Your ideal partner does not take life too seriously and or get bogged down by the little stuff.';
    } else if (answersList['4-2'] === "running") {
        display42.innerHTML = 'Your ideal partner will respect your space and give you the alone time that you crave.';
    } else if (answersList['4-2'] === "grazing") {
        display42.innerHTML = 'Your ideal partner is calm and fully committed to you.';
    } else {
        display42.innerHTML = 'Error: Unable to determine interpretation (4-2).';
    }
    
    var display43 = document.getElementById('4-3');
    if (answersList['4-3'] === "nearh") {
        display43.innerHTML = 'You prefer relationships where you spend most of your time with your partner.';
    } else if (answersList['4-3'] === "farh") {
        display43.innerHTML = 'You want a partner who will understand and accommodate your desire for alone time.';
    } else {
        display43.innerHTML = 'Error: Unable to determine interpretation (4-3).';
    }
    
    var display51 = document.getElementById('5-1');
    if (answersList['5-1'] === "few") {
        display51.innerHTML = 'You are close with your family and have a small, tight-knit group of friends.';
    } else if (answersList['5-1'] === "everywhere") {
        display51.innerHTML = 'You are a social butterfly! With family and friends too numerous to count, you will never be lonely.';
    } else {
        display51.innerHTML = 'Error: Unable to determine interpretation (5-1).';
    }
    
    var display52 = document.getElementById('5-2');
    if (answersList['5-2'] === "rain") {
        display52.innerHTML = 'Rain symbolizes the problems in your life; the harder the rain, the bigger the problems.';
    } else if (answersList['5-2'] === "fog") {
        display52.innerHTML = 'You feel uncertainty in life and may be struggling with your identity.';
    } else if (answersList['5-2'] === "wind") {
        display52.innerHTML = 'Though you tend to worry about future issues, you generally do not let them get you down for long.';
    } else if (answersList['5-2'] === "sun") {
        display52.innerHTML = 'You are optimistic and carefree!';
    } else {
        display52.innerHTML = 'Error: Unable to determine interpretation (5-2).';
    }
    
    var display61 = document.getElementById('6-1');
    if (answersList['6-1'] === "above") {
        display61.innerHTML = 'You are deeply affected by stress and have a hard time seeing past it to get back to the bigger picture.';
    } else if (answersList['6-1'] === "background") {
        display61.innerHTML = 'Obstacles that might cause you grief do not stay at the forefront of your mind. You are good at managing your anxiety.';
    } else {
        display61.innerHTML = 'Error: Unable to determine interpretation (6-1).';
    }
    
    var display62 = document.getElementById('6-2');
    if (answersList['6-2'] === "mild") {
        display62.innerHTML = 'Though you are not immune to stress, you know that all things must pass.';
    } else if (answersList['6-2'] === "intense") {
        display62.innerHTML = 'When you stress, you go all in and have a very hard time pulling yourself out again.';
    } else {
        display62.innerHTML = 'Error: Unable to determine interpretation (6-2).';
    }
}


// Call the displayInterpretation function when the page loads
window.onload = displayInterpretation;

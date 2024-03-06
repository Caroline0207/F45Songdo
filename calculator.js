document.getElementById('calculator').addEventListener('submit', function(event){
    event.preventDefault();

    const rowing = document.getElementById('rowing').value / 2.9;
    const benchHop = document.getElementById('benchHop').value * 1.0526;
    const pushup = document.getElementById('pushup').value * 1.7543;
    const lateralhop = document.getElementById('lateralhop').value * 0.7692;
    const boxjump = document.getElementById('boxjump').value * 5;
    const chinup = document.getElementById('chinup').value * 4;
    const squatpress = document.getElementById('squatpress').value * 2.7778;
    const russiantwist = document.getElementById('russiantwist').value * 1.1494;
    const deadball = document.getElementById('deadball').value * 3.704;
    const sprint = document.getElementById('sprint').value * 6.6667;
    
    


    const totalScore = rowing + benchHop + pushup + lateralhop + boxjump + chinup + squatpress + russiantwist + deadball +sprint;
    document.getElementById('totalScore').textContent = totalScore.toFixed(2);
});

function plus(a,b){
    console.log(a+b);
}

plus(10,20);


// ### objct 안에 선언할때는 = 대신 : 사용!!! ###

//object 안에 sayHello() 라는 function 생성
const player = {
    name: "jumin",
    sayHello: function(name){
        console.log(`hello ${name}`);
    },
};

console.log(player.name);
player.sayHello(player.name);

const games = {
    gameName : "LOL",
    difficulty : function(name, difficulty){
        console.log(`${name}의 난이도는 ${difficulty} 입니다.`);
    }
};

games.difficulty(games.gameName, "쉬움");
const quotes = [
    {
    quote:"준비하지 않은 자는 기회가 와도 소용없다.",
    author:"알렉시스 드 토크빌",
},
{
    quote:"노력에 집착하라. 숙명적인 노력을.",
    author:"레오나르도 다 빈치",
},
{
    quote:"나는 날마다 모든 면에서 점점 좋아지고 있다.",
    author:"에밀쿠에",
},
{
    quote:"불가능한 일을 해보는 것은 신나는 일이다.",
    author:"윌트 디즈니",
},
{
    quote:"할 수 있다고 믿는 사람은 결국 그렇게 된다.",
    author:"샤론 드골",
},
{
    quote:"한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author:"마이클 조던",
},
{
    quote:"삶은 당신이 만드는 것이다. 이전에도 그랬고 앞으로도 그럴 것이다.",
    author:"그랜마 모세",
},
{
    quote:"무엇을 시도할 용기도 없으면서 멋진 삶을 바란단 말인가.",
    author:"반 고흐",
},
{
    quote:"목표를 높게 잡아라. 그리고 도달할 때까지 멈추지 마라.",
    author:"보 잭슨",
},
{
    quote:"세상에서 가장 현명한 사람은 모든 사람으로부터 배우는 사람이다. 가장 사랑받는 사람은 칭찬하는 사람이다. 가장 강한 사람은 감정을 조절할 줄 아는 사람이다.",
    author:"탈무드",
}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
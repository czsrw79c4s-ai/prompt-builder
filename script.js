const pages = [
{
    title: "Model",
    options: [
        "niji 7",
        "niji 6"
    ]
},
{
    title: "Character",
    options: [
        "指定しない",
        "Girl",
        "Boy"
    ]
}
];

let currentPage = 0;

const selections = {};

function render(){

    const page = pages[currentPage];

    let html = `

    <div class="card">

        <h1>Prompt Builder</h1>

        <h2>${page.title}</h2>

    `;

    page.options.forEach(option=>{

        const selected = selections[currentPage]===option ? "selected":"";

        html+=`
        <button class="option ${selected}" onclick="selectOption('${option}')">
            ${option}
        </button>
        `;

    });

    html+=`

    <div class="bottom">

        <button onclick="back()">
            戻る
        </button>

        <button onclick="next()">
            次へ
        </button>

    </div>

    </div>

    `;

    document.getElementById("app").innerHTML=html;

}

function selectOption(option){

    selections[currentPage]=option;

    render();

}

function next(){

    if(currentPage<pages.length-1){

        currentPage++;

        render();

    }

}

function back(){

    if(currentPage>0){

        currentPage--;

        render();

    }

}

render();

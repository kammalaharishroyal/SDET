const ObjRepo={
    "Data":[
        {
            "FileName":"Lgn.json",
            "values":{
                "EnterLoginDetails":[
                    {
                    "Lgn_userName_tx":"xpath;//input[@name='__ac_pw__']",
                    "Lgn_Pw_tx":"xpath;//input[@name='__ac_pwd__']"
                }
                ],
                "EnterMemDetails":[
                    {
                    "Lgn_userName_tx":"xpath;//input[@name='__ac_pw__']",
                    "Lgn_Pw_tx":"xpath;//input[@name='__ac_pwd__']"
                }
                ]
                
            }
        },
        {
            "FileName":"Harish.json",
            "values":{
                "EnterLoginDetails":[
                    {
                    "Lgn_userName_tx":"xpath;//input[@name='__ac_pw__']",
                    "Lgn_Pw_tx":"xpath;//input[@name='__ac_pwd__']"
                }
                ],
                "EnterMemDetails":[
                    {
                    "Lgn_userName_tx":"xpath;//input[@name='__ac_pw__']",
                    "Lgn_Pw_tx":"xpath;//input[@name='__ac_pwd__']"
                }
                ]
                
            }
        }
       
    ]
}


// 1. Get reference to the table body or table
const table = document.getElementById("ObjRep");
let bodyData=table.getElementsByTagName("tbody");
// 2. Create a new table row
// const tr = document.createElement("tr");
// 3. Define the cell values


// 4. Loop through values and create <td> for each


// 5. Append the row to the table

function FetchAll(){
  

ObjRepo.Data.forEach(filData=>{
    const fname=filData.FileName;
    const dat=filData.values;
    // console.log(fname,"=",dat);
    for(let k in dat){
        // console.log(k,"=",dat[k]);
        dat[k].forEach(x=>{
            for(let locKey in x){
                const tr = document.createElement("tr");
                console.log(fname,k,locKey,"=",x[locKey]);
                const cells = [fname,k,locKey,x[locKey]];
                // console.log(cells);
                cells.forEach(text => {
                const td = document.createElement("td");
                td.textContent = text;
                tr.appendChild(td);
                console.log(tr);
                bodyData[0].appendChild(tr);
});

                
            }
            
        })
        
    }
    

})

}

const jsonData = {
  "Data": [
    {
      "FileName": "Lgn.json",
      "values": {
        "EnterLoginDetails": [
          {
            "Lgn_userName_tx": "xpath;//input[@name='__ac_pw__']",
            "Lgn_Pw_tx": "xpath;//input[@name='__ac_pwd__']"
          }
        ],
        "EnterMemDetails": [
          {
            "Lgn_userName_tx": "xpath;//input[@name='__ac_pw__']",
            "Lgn_Pw_tx": "xpath;//input[@name='__ac_pwd__']"
          }
        ]
      }
    },
    {
      "FileName": "Harish.json",
      "values": {
        "EnterLoginDetails": [
          {
            "Lgn_userName_tx": "xpath;//input[@name='__ac_pw__']",
            "Lgn_Pw_tx": "xpath;//input[@name='__ac_pwd__']"
          }
        ],
        "EnterMemDetails": [
          {
            "Lgn_userName_tx": "xpath;//input[@name='__ac_pw__']",
            "Lgn_Pw_tx": "xpath;//input[@name='__ac_pwd__']"
          }
        ]
      }
    },
    {
      "FileName": "LoginForm.json",
      "values": {
        "VerifyInputs": [
          {
            "Input_Email": "xpath;//input[@id='email']"
          }
        ]
      }
    }
  ]
};

let selectedIndices = [];

function filterFiles() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = "";

  if (input.trim() === "") {
    // If input is empty, hide/clear suggestions
    return;
  }

  jsonData.Data.forEach((item, index) => {
    if (item.FileName.toLowerCase().includes(input)) {
      const div = document.createElement("div");
      div.className = "filename";
      div.innerText = item.FileName;
      div.onclick = () => addSelected(index);
      fileList.appendChild(div);
    }
  });
}


function addSelected(index) {
  if (!selectedIndices.includes(index)) {
    selectedIndices.push(index);
    renderSelectedFiles();
  }
}

function removeSelected(index) {
  selectedIndices = selectedIndices.filter(i => i !== index);
  renderSelectedFiles();
}

function renderSelectedFiles() {
  const selectedDiv = document.getElementById("selectedFiles");
  selectedDiv.innerHTML = "";

  selectedIndices.forEach(index => {
    const file = jsonData.Data[index];
    const span = document.createElement("span");
    span.className = "selected-tag";
    span.innerText = file.FileName;

    const remove = document.createElement("span");
    remove.className = "remove-btn";
    remove.innerHTML = "❌";
    remove.onclick = () => removeSelected(index);

    span.appendChild(remove);
    selectedDiv.appendChild(span);
  });
}
let tableInfo = document.getElementById("ObjRep");
let bodyDataInfo=tableInfo.getElementsByTagName("tbody");
// console.log("bodyDataInfo:"+bodyDataInfo[0].tagName);

function showResults() {
  let tableInfo = document.getElementById("ObjRep");
let bodyDataInfo=tableInfo.getElementsByTagName("tbody");
  console.log("Shpow res fun"+bodyDataInfo[0].tagName);
  
  // const resultsDiv = document.getElementById("");
  // resultsDiv.innerHTML = "";

  // if (selectedIndices.length === 0) {
  //   resultsDiv.innerText = "No files selected.";
  //   return;
  // }
console.log("Shpow res fun 2"+bodyDataInfo[0].tagName);
  selectedIndices.forEach(index => {
    const fileData = jsonData.Data[index];
    let output = `📄 FileName: ${fileData.FileName}\n`;
console.log("Shpow res fun 3"+bodyDataInfo[0].tagName);
    for (let groupKey in fileData.values) {
      output += `  🔸 Section: ${groupKey}\n`;
console.log("Shpow res fun 4"+bodyDataInfo[0].tagName);
      fileData.values[groupKey].forEach(entry => {
        for (let key in entry) {
          console.log("Shpow res fun 5"+bodyDataInfo[0].tagName);
          output += `    - ${key}: ${entry[key]}\n`;
           const tr = document.createElement("tr");
            // console.log(fname,k,locKey,"=",x[locKey]);
                const cells = [fileData.FileName,groupKey,key,entry[key]];
                console.log("New:",cells);
                cells.forEach(text => {
                const td = document.createElement("td");
                td.textContent = text;
                tr.appendChild(td);
                console.log("new tr:",tr,",mn:"+bodyData.length);
                bodyDataInfo[0].appendChild(tr);
                });
        }
      });
    }

    output += "\n";
    // resultsDiv.innerText += output;
  });



 
               
}
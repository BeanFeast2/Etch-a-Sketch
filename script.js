function gridCreate(columnSize = 100, rowSize = 100){
  let columnPercent = 100 / columnSize;
  let rowPercent = 100 / rowSize;

  let blockContainer = document.querySelector('#blockContainer')
  blockContainer.style.position = 'fixed';
  blockContainer.style.height = '100%';
  blockContainer.style.width = '100%';

  //creates columns to be filled with blocks
  for(i=0; i < columnSize; i++ ){
    let column = document.createElement('div');
    column.classList.add('column');
    blockContainer.appendChild(column);
    column.style.display = 'inline-block';
    column.style.height = '100%';
    column.style.width =  columnPercent + '%';

  //creates blocks that fill column elements above
    for(j=0; j < rowSize; j++){
      let row = document.createElement('div');
      row.classList.add('block');
      row.style.height = rowPercent + '%';
      column.appendChild(row);
    };
  };

  //creates nodelist of all block divs
  let blocks = document.querySelectorAll('.block');
  //Changes color of mouseover block and turns block back after 350ms
  for(i = 0; i < blocks.length; i++){
    blocks[i].addEventListener('mouseover', function(event){
      event.target.classList.add('colorChange');
    });
  };
};

function clearGrid(){
  document.getElementById('blockContainer').innerHTML = '';
};



gridCreate();

let button = document.querySelector('button')
//creates new grid on button press with prompted new grid size
button.onclick = function(){
  alert('Let\'s make the sketch pad a new size!')
  let newColumnSize = prompt("Enter Amount of Blocks spanning Left to Right! (From 1 to 200)");
  while(isNaN(newColumnSize) || (1 > newColumnSize) || (newColumnSize > 200)){
    newColumnSize = prompt("Enter Amount of Blocks spanning Left to Right! (From 1 to 200)");
  };
  let newRowSize = prompt("Enter Amount of Blocks spanning Up and Down! (From 1 to 200)");
  while(isNaN(newRowSize) || (1 > newRowSize) || (newRowSize > 200)){
    newRowSize = prompt("Enter Amount of Blocks spanning Up and Down! (From 1 to 200)");
  };
  clearGrid();
  gridCreate(newColumnSize, newRowSize);
};

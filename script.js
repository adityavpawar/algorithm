const n =40;
const array = [];

// random();

function random(){
    for(let i =0 ; i<n; i++){
        array[i] = Math.random();
    }
    showBars();
    //setup();
}


random();



// let values = [];
// let w = 10;

// let states = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   values = new Array(floor(width / w));
//   for (let i = 0; i < values.length; i++) {
//     values[i] = random(height);
//     states[i] = -1;
//   }
//   console.log(values,states)
//  // quickSort(values, 0, values.length - 1);

// }
// setup();




function sort(){
    const copy = [...array];
    const swaps = bubbleSort(copy);
    animate(swaps);
}



 function animate(swaps){
    if(swaps.length == 0){
        
        return;
    }
    const[i,j] = swaps.shift();
    [array[i] , array[j]] = [array[j] , array[i]];
    showBars([i,j]);
    setTimeout(function(){
        animate(swaps);
    }, 90);
 }




function bubbleSort(array){
    const swaps =[];
    var i, j;
    var len = array.length;
    var isSwapped = false;
    for (i = 0; i < len; i++) {
  
        isSwapped = false;
  
        for (j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                isSwapped = true;
                swaps.push([j,j+1]);
                var temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSwapped = true;
            }
        }
  
        // IF no two elements were swapped
        // by inner loop, then break 
        if (!isSwapped) {
            break;
        }
    }
  
   return swaps;

}






function sort2(){
    
    const copy = [...array];
    const swaps = insertion(copy);
    animate(swaps);
   
    // insertion(array);
    // animate(swaps);
    
}
function insertion(array){
    const swaps = [];

    let i, key, j; 
    for (i = 1; i < array.length; i++)
    { 
        key = array[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && array[j] > key)
        { 
           
            swaps.push([j,j+1]);

            array[j + 1] = array[j]; 
            j = j - 1; 
        } 

        //swaps.push([j+1,key]);
        array[j + 1] = key; 
    } 
    return swaps;
}






function sort3(){
    const copy = [...array];
    const swaps = selection(copy);
    animate(swaps);
    
    // selection(array);
    // animate(swaps);
    
}
function selection(array)
{
    const swaps = [];

    var i, j, min;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < array.length-1; i++)
    {
        // Find the minimum element in unsorted array
        min = i;
        for (j = i + 1; j < array.length; j++)
        if (array[j] < array[min])
            min = j;
            swaps.push([i,min]);
 
        // Swap the found minimum element with the first element
        // swaps.push([min,j]);

        var temp = array[min];
        array[min] = array[i];
        array[i] = temp;
   }
   return swaps;
}
   
// function sort4(){
//     const copy = [...array];
//     const swaps = quick(copy , 0, array.length-1);

//     animate(swaps);
    
//     // selection(array);
//     // animate(swaps);
    
// }

// function partition(arr, low, high) {
//     const swaps = [];

//     // Choosing the pivot
//     let pivot = arr[high];
   
//     // Index of smaller element and indicates the right position of pivot found so far
//     let i = low - 1;
   
//     for (let j = low; j <= high - 1; j++) {
//         // If current element is smaller than the pivot
//         if (arr[j] < pivot) {
//             // Increment index of smaller element
//             i++;
//             swaps.push([i,j]);
//             [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//         }
//     }
   
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
//     return i + 1; // Return the partition index
    
// }
 
// // The main function that implements QuickSort
// function quick(arr, low, high) {
//     const swaps = [];

    
//     if (low < high) {
//         // pi is the partitioning index, arr[pi] is now at the right place
//         let pi = partition(arr, low, high);
       
//         // Separately sort elements before partition and after partition
//         quick(arr, low, pi - 1);
//         quick(arr, pi + 1, high);


//     }
//     return swaps;
// }








function sort5(){
    const copy = [...array];
    const swaps = mergeSort(copy, 0, array.length-1);
   //animate(swaps);
    
    // mergeSort(array);
    // mergeSort(array, 0, array.length-1);
    
    
}

function merge(arr, l, m, r)
{

    const swaps = [];
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
             swaps.push([i,l])
            arr[k] = L[i];
            i++;
        }
        else {
            swaps.push([i,l]);
            arr[k] = R[j];
            j++;
        }
        k++;
      
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        swaps.push([i,l]);
        arr[k] = L[i];
        i++;
        k++;
      
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
         swaps.push([j,l]);
        arr[k] = R[j];
        j++;
        k++;
        
    }
    
    return swaps;
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
//  function mergeSort(arr,l, r){
    
//     if(l>=r){
//         return;
//     }
//     var m =l+ parseInt((r-l)/2);
//     mergeSort(arr,l,m);
//     mergeSort(arr,m+1,r);
//     const swaps =  merge(arr,l,m,r);
//     animate(swaps);

   
    
// }
 


// async function quickSort() {
//     setup()
//     let arr = values
//       let start =0
//        let end =values.length - 1
//     console.log(arr, start, end)
//     if (start >= end) {
//       return;
//     }
//     let index = await partition(arr, start, end);
//     states[index] = -1;
  
//     await Promise.all([
//       quickSort(arr, start, index - 1),
//       quickSort(arr, index + 1, end)
//     ]);
//   }
  
//   async function partition(arr, start, end) {
//     for (let i = start; i < end; i++) {
//       states[i] = 1;
//     }
  
//     let pivotValue = arr[end];
//     let pivotIndex = start;
//     states[pivotIndex] = 0;
//     for (let i = start; i < end; i++) {
//       if (arr[i] < pivotValue) {
//         await swap(arr, i, pivotIndex);
//         states[pivotIndex] = -1;
//         pivotIndex++;
//         states[pivotIndex] = 0;
//       }
//     }
//     await swap(arr, pivotIndex, end);
  
//     for (let i = start; i < end; i++) {
//       if (i != pivotIndex) {
//         states[i] = -1;
//       }
//     }
  
//     return pivotIndex;
//   }
  
//   function draw() {
//     background(0);
  
//     for (let i = 0; i < values.length; i++) {
//       noStroke();
//       if (states[i] == 0) {
//         fill('#E0777D');
//       } else if (states[i] == 1) {
//         fill('#D6FFB7');
//       } else {
//         fill(255);
//       }
//       rect(i * w, height - values[i], w, values[i]);
//     }
//   }
  
//   async function swap(arr, a, b) {
//     await sleep(50);
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//   }
  
//   function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }






 







function showBars(indices){
    container.innerHTML= "";
    for(let i = 0; i<array.length;i++){
        const bar = document.createElement("div");
        bar.style.height =  array[i]*100+"%";
        bar.classList.add("bar");
       
        if(indices && indices.includes(i)){
            bar.style.backgroundColor="red";
        }

        container.appendChild(bar);
    }
}
const chartData = {
  labels: ["HTML", "CSS", "Python", "c++", "other"],
  data: [35, 35, 20, 7, 3],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();








const chartData2 = {
  labels: ["Thai", "English", "Chinese", "other"],
  data: [50, 35, 10, 5],
};


const myChart2 = document.querySelector(".my-chart2");
const ul2 = document.querySelector(".programming-stats2 .details2 ul");

// สร้างกราฟที่สอง
new Chart(myChart2, {
  type: "doughnut",
  data: {
    labels: chartData2.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData2.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// สร้างรายการข้อมูลสำหรับกราฟที่สอง
const populateUl2 = () => {
  chartData2.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData2.data[i]}%</span>`;
    ul2.appendChild(li);
  });
};

populateUl2();


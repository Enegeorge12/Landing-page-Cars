const data = [
  {
    id: 1,
    title: 'Big title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend libero a lorem. Donec molestie urna nisi',
    link: '/link-1',
    imageSource: 'https://randompicturegenerator.com/img/car-generator/g23fdf7279b219dc0432e07ad28f06635aaff9fb3d471e20d6b936bd5865f88f68a383fd8baac02e9d586a59b5af6c07b_640.jpg',
    imageDescription: 'Donec vel lacus nibh. Mauris ultrices sem purus.',
    downloadLinks: [
      {'Download 1': 'download link'},
      {'Download 2': 'download link'},
      {'Download 3': 'download link'},
      {'Download 4': 'download link'}
    ],
    secondaryTitle: 'Small title 1',
    secondaryDescription: 'Proin lacus lacus, luctus sed quam quis'
  },
  {
    id: 2,
    title: 'Big title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend libero a lorem. Donec molestie urna nisi',
    link: '/link-2',
    imageSource: 'https://randompicturegenerator.com/img/car-generator/g30ca8483cddcc8536f093ca5a80e4e17d7e49eab202dd29bfecab6fb6bc37e92e1b27cd4f6ea693ba94a2de8fc455426_640.jpg',
    imageDescription: 'Donec vel lacus nibh. Mauris ultrices sem purus.',
    downloadLinks: [
      {'Download 1': 'download link'},
      {'Download 2': 'download link'},
      {'Download 3': 'download link'},
      {'Download 4': 'download link'}
    ],
    secondaryTitle: 'Small title 2',
    secondaryDescription: 'Proin lacus lacus, luctus sed quam quis'
  },
  {
    id: 3,
    title: 'Big title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend libero a lorem. Donec molestie urna nisi',
    link: '/link-3',
    imageSource: 'https://randompicturegenerator.com/img/car-generator/g9616fc8cd93b5012465c80487bca207748ff921a9a499a227fd3daf03b47e558b1ed2c44aa0de649f489e73485010229_640.jpg',
    imageDescription: 'Donec vel lacus nibh. Mauris ultrices sem purus.',
    downloadLinks: [
      {'Download 1': 'download link'},
      {'Download 2': 'download link'},
      {'Download 3': 'download link'},
      {'Download 4': 'download link'}
    ],
    secondaryTitle: 'Small title 3',
    secondaryDescription: 'Proin lacus lacus, luctus sed quam quis'
  }
];

function renderTab(tabId) {

  let obj = data.find(object => object.id === tabId);

  let content = document.querySelector(".description")
  let imgcontainer = document.querySelector(".img ")
  content.textContent = '';
  imgcontainer.textContent = '';
  let title = document.createElement("h1")
  title.textContent = obj.title
  let description = document.createElement("p")
  description.textContent = obj.description
  let linkDescription = document.createElement("a")
  linkDescription.setAttribute("target", "_blank")
  linkDescription.textContent = "Link"
  linkDescription.href = obj.link
  let img = document.createElement("img")
  img.src = obj.imageSource
  let imgDescription = document.createElement("p")
  imgDescription.innerHTML = `<i class="fa fa-map-marker"></i>` + obj.imageDescription
  imgDescription.style.textAlign = "center"

  let footerLinks = document.querySelector(".footerTitle")
  footerLinks.innerHTML =
    `<h2>${obj.secondaryTitle}</h2>
   <p>${obj.secondaryDescription}</p>`;

  content.appendChild(title)
  content.appendChild(description)
  content.appendChild(linkDescription)
  imgcontainer.appendChild(img)
  imgcontainer.appendChild(imgDescription)

  let tabList = document.querySelectorAll('.tablink')
  tabList.forEach(element => {
    element.classList.remove("activeTab")
  });

  let activeTab = '#tab_' + tabId
  let tab = document.querySelector(activeTab)
  tab.classList.add("activeTab")
}


window.onload = function (e) {
  
  renderTab(1);
};

const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];
const rootNode = document.getElementById('root');

let iconClosedFolder = "<i class='material-icons'>folder</i>";
let iconOpenedFolder = 'folder_open';
let iconFile = "<i class='material-icons'>insert_drive_file</i>";

function parseData(data) {
  let list = document.createElement('ul');
  list.className = 'folder-list';
  for ( let key in data) {
    if ( typeof data[key] === 'object' && data[key] !== null) {
      let child = data[key];
      let li = document.createElement('li');
      if (child.folder) {
        li.className = 'folder-list__item --folder is-closed';
        li.innerHTML = `${iconClosedFolder}<span class="folder-list__title js-accordion">${child.title}</span>`;
          if (child.children === null || !child.children ) {
            let emptyItem = document.createElement('em');
            emptyItem.className = 'empty-item';
            emptyItem.innerHTML = 'Folder is empty';
            li.append(emptyItem);
          }
          li.appendChild(parseData(child.children));
      } else {
        li.className = 'folder-list__item --file';
        li.innerHTML = `${iconFile}<span class="folder-list__title">${child.title}</span>`;
      }
      list.appendChild(li);
    }
  }
  return list;
}

function treeToggle(e) {
  let target = e.target;
  let parentTarget = target.parentNode;
  let icon = parentTarget.getElementsByClassName('material-icons')[0];
  let openedClass = 'is-opened';
  let closedClass = 'is-closed';
  if( parentTarget.classList.contains(openedClass)) {
    parentTarget.classList.remove(openedClass);
    parentTarget.classList.add(closedClass);
    icon.innerHTML = 'folder';
  } else {
    parentTarget.classList.remove(closedClass);
    parentTarget.classList.add(openedClass);
    icon.innerHTML = iconOpenedFolder;
  }
}

rootNode.append(parseData(structure));
document.querySelectorAll('.js-accordion').forEach(item => {
  item.addEventListener('click', treeToggle);
});
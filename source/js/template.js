console.clear();

var subjList = document.querySelector('.main-subject-list__list');

var template = document.querySelector('#subj-template');

var subjListItemTemplate = template.content.querySelector('.main-subject-list__list-item');

var renderBigList = function (arr) {
  arr.forEach(function (item) {
    var newSubject = subjListItemTemplate.cloneNode(true);
    var subjHeading = newSubject.querySelector('.main-subject-list__list-item-heading');

    subjHeading.textContent = item.subject;

    var subSubj = item.subSubject;
    var subjSubList = newSubject.querySelector('.main-subject-list__sublist');
    var subTmpl = document.querySelector('#sub-subj-template');
    var subjSubListItemTmpl = subTmpl.content.querySelector('.main-subject-list__sublist-item');

    subSubj.forEach(function (subSubject) {
      var newSubSubject = subjSubListItemTmpl.cloneNode(true);
      var newSubSubjectHead = newSubSubject.querySelector('.main-subject-list__sublist-item-heading a');
      var newSubSubjectTag = newSubSubject.querySelector('.main-subject-list__sublist-item-heading-tag');

      newSubSubjectHead.textContent = subSubject.title;
      newSubSubjectTag.textContent = "[" + subSubject.tag + "]";
//-----------------------------------------------------------------------------------------------
      var includes = subSubject.includes;
      var includeList = newSubSubject.querySelector('.main-subject-list__sublist-item-includes');
      var includeTmpl = document.querySelector('#include-template');
      var includeItemTmpl = includeTmpl.content.querySelector('.main-subject-list__sublist-item-include-item');;
      if (includes) {
        var includeStart = document.createElement('li');
        includeStart.classList.add('main-subject-list__sublist-item-includes-start');
        includeStart.textContent = "includes: ";
        includeList.appendChild(includeStart);

        includes.forEach(function (include) {
          var newInclude = includeItemTmpl.cloneNode(true);
          var newIncludeLink = newInclude.querySelector('a');

          newIncludeLink.textContent = include;

          includeList.appendChild(newInclude);
        });
      }
//-----------------------------------------------------------------------------------------------
      subjSubList.appendChild(newSubSubject);
    });

    subjList.appendChild(newSubject);
  });
};

renderBigList(bigList);

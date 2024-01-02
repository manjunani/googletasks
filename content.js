setTimeout(function () {
  document.body.style =
    'position:relative;max-width:600px;margin:auto; box-shadow:0px 0px 10px rgba(0, 0, 0, 0.09);display:block !important';
  document.body.querySelector('div').style = 'max-width:600px';

  if (!document.getElementById('mn')) {
    var newElement = document.createElement('div');
    newElement.id = 'mn';
    newElement.style.textAlign = 'center';

    var parentElement = document.querySelector('c-wiz>div');
    var referenceElement = document.querySelector('c-wiz>div>div');
    referenceElement.style.height = 'calc(100% - 52px)';
    parentElement.insertBefore(newElement, referenceElement);
  }
}, 600);

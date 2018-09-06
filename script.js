document.getElementById("js-warning-title").innerHTML = '';

function ImageUp() {
  if (document.form.url.value == '') {
    document.getElementById("warning").innerHTML = "<p>URLの値をを空にすることはできません</p>";
  } else {
    document.getElementById("warning").innerHTML = "";
    window.open(document.form.url.value,document.form.title.value,"width="+document.form.width.value+",height="+document.form.height.value);
  }
}

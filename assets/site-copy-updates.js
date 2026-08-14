document.addEventListener('DOMContentLoaded', function () {
  var description = document.querySelector('.projects .projectLead > p:not(.kicker)');
  if (description) {
    description.textContent = '卓雅服务于建设工地、文旅营地等多样项目。从实用出发，也从长期使用的舒适度出发。';
  }
});

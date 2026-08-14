(function () {
  var applying = false;
  var projectDescription = '\u5353\u96c5\u670d\u52a1\u4e8e\u5efa\u8bbe\u5de5\u5730\u3001\u6587\u65c5\u8425\u5730\u7b49\u591a\u6837\u9879\u76ee\u3002\u4ece\u5b9e\u7528\u51fa\u53d1\uff0c\u4e5f\u4ece\u957f\u671f\u4f7f\u7528\u7684\u8212\u9002\u5ea6\u51fa\u53d1\u3002';

  function applyProjectUpdates() {
    if (applying) return;
    applying = true;

    var description = document.querySelector('.projects .projectLead > p:not(.kicker)');
    if (description && description.textContent !== projectDescription) {
      description.textContent = projectDescription;
    }

    var cards = document.querySelector('.projectCards');
    if (cards) {
      var oldIndustrialCard = cards.querySelector('[href="/projects/industrial-park-office"]');
      if (oldIndustrialCard) oldIndustrialCard.remove();

      var largeCampNumber = cards.querySelector('[href="/projects/large-site-camp"] small');
      if (largeCampNumber && largeCampNumber.textContent !== 'PROJECT / 01') {
        largeCampNumber.textContent = 'PROJECT / 01';
      }

      var tourismNumber = cards.querySelector('[href="/projects/cultural-tourism-camp"] small');
      if (tourismNumber && tourismNumber.textContent !== 'PROJECT / 02') {
        tourismNumber.textContent = 'PROJECT / 02';
      }

      if (!cards.querySelector('[href="/projects/mountain-valley-camp"]')) {
        var card = document.createElement('a');
        card.href = '/projects/mountain-valley-camp';
        card.className = 'projectCard mountainValleyCard';
        card.innerHTML = '<div><small>PROJECT / 03</small><h3>\u5c71\u8c37\u6587\u65c5\u8425\u5730<br>\u914d\u5957\u7a7a\u95f4</h3><span>\u5355\u5c42\u5efa\u7b51 \u00b7 \u81ea\u7136\u878d\u5408</span><i>\u67e5\u770b\u8be6\u60c5 \u2192</i></div>';
        cards.appendChild(card);
      }
    }

    var listing = document.querySelector('.projectListing');
    if (listing && !listing.querySelector('[href="/projects/mountain-valley-camp"]')) {
      var item = document.createElement('a');
      item.href = '/projects/mountain-valley-camp';
      item.className = 'projectShowcase mountainValleyCase';
      item.setAttribute('aria-label', '\u67e5\u770b\u5c71\u8c37\u6587\u65c5\u8425\u5730\u914d\u5957\u7a7a\u95f4');
      item.innerHTML = '<div><small>PROJECT / 07</small><h2>\u5c71\u8c37\u6587\u65c5\u8425\u5730\u914d\u5957\u7a7a\u95f4</h2><p>\u6587\u65c5\u8425\u5730</p><span>\u5355\u5c42\u5efa\u7b51 \u00b7 \u81ea\u7136\u878d\u5408</span><b class="projectCardLink">\u67e5\u770b\u9879\u76ee\u8be6\u60c5 \u2192</b></div>';
      listing.appendChild(item);
    }

    applying = false;
  }

  var observer = new MutationObserver(function () {
    applyProjectUpdates();
  });

  function startProjectUpdates() {
    applyProjectUpdates();
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(applyProjectUpdates, 300);
    setTimeout(applyProjectUpdates, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startProjectUpdates, { once: true });
  } else {
    startProjectUpdates();
  }
  window.addEventListener('load', applyProjectUpdates, { once: true });
})();


document.addEventListener("DOMContentLoaded", function() {
  if (!window.hljs) return;

  hljs.registerLanguage('zulu', function(hljs) {
    return {
      keywords: {
        keyword: 'fn module type struct trait loop impl import as if else match let in for then where try or or_else',
        literal: 'true false nil',
        built_in: ''
      },
      contains: [
        hljs.COMMENT('//', '$'),
        hljs.COMMENT('/\\*', '\\*/'),
        { className: 'string', begin: '"', end: '"' },
        { className: 'number', begin: '\\b\\d+(\\.\\d+)?\\b' },
      ]
    };
  });

  hljs.highlightAll(); // Re-highlight all code blocks
  console.log("Custom language loaded: zulu");
});


/* Prism.js - Minimal syntax highlighter for documentation */
/* This is a placeholder - use the full Prism.js from https://prismjs.com */

(function() {
    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }

    Prism.highlightAll = function() {
        const elements = document.querySelectorAll('code[class*="language-"], pre[class*="language-"]');
        elements.forEach(element => {
            Prism.highlightElement(element);
        });
    };

    Prism.highlightElement = function(element) {
        // Basic syntax highlighting implementation
        // In production, use the full Prism.js library
        const language = element.className.match(/language-(\w+)/)?.[1];
        
        if (language && Prism.languages[language]) {
            const code = element.textContent;
            const highlighted = Prism.highlight(code, Prism.languages[language], language);
            element.innerHTML = highlighted;
        }
    };

    // Auto-highlight on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', Prism.highlightAll);
    } else {
        Prism.highlightAll();
    }

    // Basic language definitions
    Prism.languages.typescript = Prism.languages.javascript = {
        'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
        'string': /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        'keyword': /\b(?:import|export|from|const|let|var|function|async|await|if|else|return|class|interface|type|enum)\b/,
        'boolean': /\b(?:true|false)\b/,
        'number': /\b\d+\.?\d*\b/,
        'operator': /[+\-*/%=<>!&|?:]/,
        'punctuation': /[{}[\];(),.:]/
    };

    Prism.languages.python = {
        'comment': /#.*/,
        'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        'keyword': /\b(?:def|class|import|from|return|if|elif|else|for|while|async|await|with|as)\b/,
        'boolean': /\b(?:True|False|None)\b/,
        'number': /\b\d+\.?\d*\b/,
        'operator': /[+\-*/%=<>!&|]/,
        'punctuation': /[{}[\];(),.:]/
    };

    Prism.languages.bash = {
        'comment': /#.*/,
        'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        'keyword': /\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|function)\b/,
        'operator': /[|&;<>]/,
        'punctuation': /[{}[\];(),]/
    };

    Prism.languages.json = {
        'property': /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        'string': /"(?:\\.|[^\\"\r\n])*"/,
        'number': /\b\d+\.?\d*\b/,
        'boolean': /\b(?:true|false)\b/,
        'null': /\bnull\b/,
        'punctuation': /[{}[\],]/,
        'operator': /:/
    };

    Prism.highlight = function(code, grammar, language) {
        // Simple tokenization
        let highlighted = code;
        
        Object.keys(grammar).forEach(tokenName => {
            const pattern = grammar[tokenName];
            highlighted = highlighted.replace(pattern, match => 
                `<span class="token ${tokenName}">${match}</span>`
            );
        });
        
        return highlighted;
    };

    // Expose Prism globally
    window.Prism = Prism;
})();

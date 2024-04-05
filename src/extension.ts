import attrs from 'markdown-it-attrs';
import type MarkdownIt from 'markdown-it';

export function activate() {
    return { 
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(() => {
                return md.use(attrs);
            });
        } 
    };
}

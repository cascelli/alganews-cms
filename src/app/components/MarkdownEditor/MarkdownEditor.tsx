import MarkdownIt from 'markdown-it'
import MdEditor, { Plugins } from 'react-markdown-editor-lite'

import 'react-markdown-editor-lite/lib/index.css';

MdEditor.unuse(Plugins.FontUnderline)

const parser = new MarkdownIt()

// Code Snippet para abrir hiperlinks para webpages existentes dentro de posts
//  do MarkdownEditor em uma nova janela no navegador :
// Obs : Testado na versão 12.0.1 do markdow-it (Veja no arquivo packages.json)
//       e na versão 1.2.4 do react-markdown-editor-lite
const defaultRender = parser.renderer.rules.link_open ||
  function(tokens: any, idx: any, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options);
  };

parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    //@ts-ignore
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  return defaultRender(tokens, idx, options, env, self);
};


export interface MarkdownEditorProps {
  onChange?: ( text: string) => any
  value?: string
  readOnly?: boolean
}

export default function MarkdownEditor (props: MarkdownEditorProps) {
  return <MdEditor
    readOnly={props.readOnly}
    style={{ height: props.readOnly ? 'auto' : 300 }}
    value={props.value}
    renderHTML={ text => parser.render(text) }
    onChange ={ ({ text }) => props.onChange && props.onChange(text) }
    view={props.readOnly ? {
      menu: false, // Desabilita visualizacao do menu de edicao
      md: false, // Desabilita propriedade de visualizacao do editor markdown (parte da edicao do post)
      html: true // Habilita visualizacao de html do editor markdown (parte da visualizacao do post)
    } : undefined }
  />
}
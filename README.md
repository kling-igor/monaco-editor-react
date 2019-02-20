# Monaco Editor boilerplate

требуется изменить render() в исходниках

    return (
      // <div
      //   ref={this.assignRef.bind(this)}
      //   style={style}
      //   className="react-monaco-editor-container"
      // />
      React.createElement("div", {
        ref: this.assignRef.bind(this),
        style: style,
        className: "react-monaco-editor-container"
      })
    );

https://prettier.io/docs/en/browser.html

https://github.com/satya164/eslint-browser

A simple boilerplate for Monaco editor with React.

Реактивный Monaco editor
https://medium.com/@irbisadm/%D1%80%D0%B5%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-monaco-editor-84664a35f335
https://medium.com/voximplant/reactive-monaco-editor-507a945ac26f

Monaco in Electron example
https://github.com/Microsoft/monaco-editor-samples/tree/master/electron-amd

Monaco editor code lens provider
https://medium.com/@lyuda.dzyubinska/monaco-editor-code-lens-provider-133ac9a13f84

Monaco editor decorator
https://medium.com/@lyuda.dzyubinska/monaco-editor-decorator-385ba6aa90b8

Command palette monaco-editor
https://medium.com/@administrator_91378/command-palette-monaco-editor-cb4d4b81dce0

https://microsoft.github.io/monaco-editor/index.html

https://github.com/Microsoft/monaco-editor/wiki/Monaco-Editor-Accessibility-Guide

Monaco Editor for React
https://github.com/superRaytin/react-monaco-editor

https://github.com/Microsoft/monaco-editor-webpack-plugin

https://medium.com/@haugboelle/short-guide-to-using-monaco-with-create-react-app-26a1acad8ebe

https://www.bountysource.com/issues/47089482-improve-the-example-to-demonstrate-usage-of-react-monaco-editor

!!!!!!!!!!
https://blog.expo.io/building-a-code-editor-with-monaco-f84b3a06deaf

// открытие коммандной панели

<!-- this._editor.trigger("anyString", "editor.action.quickCommand"); -->

https://github.com/Microsoft/monaco-editor/issues/598

https://stackoverflow.com/questions/52597274/how-to-hide-the-command-palette-item-from-the-list-of-actions-in-monaco-editor

way to implement tabs !!!! - one Editor - multiple models!!!
https://github.com/Microsoft/monaco-editor/issues/604

Monaco Editor API v0.15.6
https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandalonecodeeditor.html

Language syntax definition
https://microsoft.github.io/monaco-editor/monarch.html

# Stackoverflow

https://stackoverflow.com/questions/48210120/get-restore-monaco-editor-undoredo-stack

https://stackoverflow.com/questions/45123386/scroll-to-line-in-monaco-editor

https://stackoverflow.com/questions/48212023/how-to-insert-snippet-in-monaco-editor

https://stackoverflow.com/questions/50200194/monaco-editor-copy-cut-paste-action

https://stackoverflow.com/questions/45654579/height-of-the-monaco-editor

https://stackoverflow.com/questions/53448735/is-there-a-way-to-completely-hide-the-gutter-of-monaco-editor

https://stackoverflow.com/questions/45773324/how-to-programmatically-trigger-keyboard-events-in-monaco-editor

https://stackoverflow.com/questions/41642649/how-do-i-insert-text-into-a-monaco-editor

https://stackoverflow.com/questions/51685018/how-to-enforce-function-signatures-in-javascript-in-the-monaco-editor

https://stackoverflow.com/questions/45625660/let-monaco-editor-fill-the-rest-of-the-page-cross-browser

https://stackoverflow.com/questions/49661686/monaco-editor-change-double-quote-to-single-quote-character

https://stackoverflow.com/questions/44766624/custom-background-color-in-monaco-editor

https://stackoverflow.com/questions/44000667/javascript-electron-monaco-editor-load-file-without-dialog

https://stackoverflow.com/questions/43463344/getting-errors-from-monaco-editor/46065907#46065907

# примеры работы!!!

https://github.com/Microsoft/monaco-editor/tree/master/test/playground.generated

# Command palette

https://github.com/Microsoft/monaco-editor/issues/419

https://github.com/Microsoft/monaco-editor/issues/263

vscode/src/vs/editor/standalone/browser/quickOpen/
export class QuickCommandAction extends BaseEditorQuickOpenAction
import { BaseEditorQuickOpenAction } from 'vs/editor/standalone/browser/quickOpen/editorQuickOpen';
https://github.com/Microsoft/vscode/blob/68ac1ab84302dd627426a15404fce3fa959c315d/src/vs/editor/standalone/browser/quickOpen/quickCommand.ts

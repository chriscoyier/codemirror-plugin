'use strict';

import parseCSS from '@emmetio/css-parser';
import SyntaxModel from './syntax-model';
import StreamReader from '../stream-reader';

/**
 * Creates DOM-like model for given text editor
 * @param  {CodeMirror} editor
 * @param  {String}     syntax
 * @return {Node}
 */
export default function create(editor, syntax) {
	const stream = new StreamReader(editor);

	try {
		return new SyntaxModel(parseCSS(stream), 'stylesheet', syntax);
	} catch (err) {
		console.warn(err);
	}
}

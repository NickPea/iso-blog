//

import React, { Fragment, useState } from "react";
import { createUseStyles } from "react-jss";
//components
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const useStyles = createUseStyles({
	textEditorWrapper: {
		border: "1px solid black",
	},
	toolbarClass: {},
	wrapperClass: {},
	editorClass: {},
});

export default () => {
	const classes = useStyles();

	//state
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	//on editor state change
	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	//render
	return (
		<Fragment>
			<Editor
				editorState={editorState}
				toolbarClassName={classes.toolbarClass}
				wrapperClassName={classes.wrapperClass}
				editorClassName={classes.editorClass}
				onEditorStateChange={onEditorStateChange}
			/>
		</Fragment>
	);
};

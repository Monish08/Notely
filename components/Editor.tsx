"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange?: (value: string) => void; // ✅ optional
  initialContent?: string;
  editable?: boolean;
}

export default function Editor({
  onChange,
  initialContent,
  editable = true,
}: EditorProps) {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  // ✅ Image upload handler
  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor = useCreateBlockNote({
    editable,
    initialContent: initialContent
      ? JSON.parse(initialContent)
      : undefined,

    uploadFile: handleUpload,
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onChange={() => {
        if (!editable) return; // 🔒 no saving in preview
        onChange?.(JSON.stringify(editor.document, null, 2));
      }}
    />
  );
}

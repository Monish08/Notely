'use client';

import { SingleImageDropzone } from '@/components/upload/single-image';
import {
  UploaderProvider,
  type UploadFn,
} from '@/components/upload/uploader-provider';
import { useEdgeStore } from '@/lib/edgestore';
import * as React from 'react';

export function SingleImageDropzoneUsage({
  onUploadComplete,
  disabled,
  className,
  replaceUrl,
}: {
  onUploadComplete: (url: string) => void;
  replaceUrl?: string;
  disabled?: boolean;
  className?: string;
}) {
  const { edgestore } = useEdgeStore();

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
        options: replaceUrl
          ? { replaceTargetUrl: replaceUrl }
          : undefined,
      });

      onUploadComplete(res.url);
      return res;
    },
    [edgestore, onUploadComplete, replaceUrl],
  );

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <SingleImageDropzone
        className={className}
        disabled={disabled}
        height={200}
        width={200}
        dropzoneOptions={{
          maxSize: 1024 * 1024 * 1,
        }}
      />
    </UploaderProvider>
  );
}

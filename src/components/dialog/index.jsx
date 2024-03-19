import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useJobDetail } from "./job detail.query";
import Photos from "./swiper";

export default function Popup({ open, close, jobId }) {
  const {
    data: jobDetail,
    isPending,
    isError,
    error,
  } = useJobDetail({ jobId });

  return (
    <Dialog open={open}>
      <DialogTitle>詳細資訊</DialogTitle>
      <DialogContent className='flex flex-col gap-2'>
        {isPending ? (
          <p>detail loading</p>
        ) : isError ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <h5 className='text-5 font-bold'>{jobDetail.companyName}</h5>
            <Photos imgList={jobDetail.companyPhoto} />
            <article
              id='job-detail'
              dangerouslySetInnerHTML={{
                __html: jobDetail.description,
              }}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            close();
          }}
        >
          關閉
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type DefaultResponse<StatusCodes extends number> = {
  ok: boolean;
  status: StatusCodes;
};

type SuccessfulResponse<StatusCodes extends number, DataType> = {
  ok: true;
  status: StatusCodes;
  data: DataType;
};

type FailedResponse<StatusCodes extends number> = {
  ok: false;
  status: StatusCodes;
};

export type ActionResponse<
  StatusCodes extends number,
  DataType = undefined,
> = DataType extends undefined
  ? DefaultResponse<StatusCodes>
  : SuccessfulResponse<StatusCodes, DataType> | FailedResponse<StatusCodes>;

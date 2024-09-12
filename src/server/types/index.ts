export interface users{
    id:number;
    created_at:Date;
     handle: string;
     email:string;
};

export interface chirps{
    id:number;
    created_at:Date;
     user_id:number
     body:string;
     location:string;
};

export interface mentions{
    id:number;
    created_at:Date;
     chirps_id: number;
     user_id:number;
};
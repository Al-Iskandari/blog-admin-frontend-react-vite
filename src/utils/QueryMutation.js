import { useQuery, useMutation, useQueryClient } from "react-query";

export const UseApiGet = (key, fn, options) => useQuery({
    queryKey : key,
    queryFn : fn,
    ...options
});

export const UseApiSend = (fn, success, error, invalidateKey, options) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : fn,
        onSuccess : (data) => {
            invalidateKey && invalidateKey.forEach((key)=> {
                queryClient.invalidateQueries(key);
            }); 
            success && success(data);
        },
        onError : error,
        retry : 2,
       ...options,
    });
}
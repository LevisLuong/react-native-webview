import { OnShouldStartLoadWithRequest } from './WebViewTypes';
declare const defaultOriginWhitelist: string[];
declare const createOnShouldStartLoadWithRequest: (loadRequest: (shouldStart: boolean, url: string, lockIdentifier: number) => void, originWhitelist: readonly string[], onShouldStartLoadWithRequest?: OnShouldStartLoadWithRequest | undefined) => ({ nativeEvent }: any) => void;
declare const defaultRenderLoading: () => any;
declare const defaultRenderError: (errorDomain: string | undefined, errorCode: number, errorDesc: string) => any;
export { defaultOriginWhitelist, createOnShouldStartLoadWithRequest, defaultRenderLoading, defaultRenderError, };
//# sourceMappingURL=WebViewShared.d.ts.map
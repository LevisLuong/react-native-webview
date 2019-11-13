import React from 'react';
import { IOSWebViewProps, State } from './WebViewTypes';
declare class WebView extends React.Component<IOSWebViewProps, State> {
    static defaultProps: {
        javaScriptEnabled: boolean;
        cacheEnabled: boolean;
        originWhitelist: string[];
        useSharedProcessPool: boolean;
    };
    static isFileUploadSupported: () => Promise<boolean>;
    state: State;
    webViewRef: any;
    getCommands: () => {
        goForward: number;
        goBack: number;
        reload: number;
        stopLoading: number;
        postMessage: number;
        injectJavaScript: number;
        loadUrl: number;
        requestFocus: number;
    };
    /**
     * Go forward one page in the web view's history.
     */
    goForward: () => void;
    /**
     * Go back one page in the web view's history.
     */
    goBack: () => void;
    /**
     * Reloads the current page.
     */
    reload: () => void;
    /**
     * Stop loading the current page.
     */
    stopLoading: () => void;
    /**
     * Request focus on WebView rendered page.
     */
    requestFocus: () => void;
    /**
     * Posts a message to the web view, which will emit a `message` event.
     * Accepts one argument, `data`, which must be a string.
     *
     * In your webview, you'll need to something like the following.
     *
     * ```js
     * document.addEventListener('message', e => { document.title = e.data; });
     * ```
     */
    postMessage: (data: string) => void;
    /**
     * Injects a javascript string into the referenced WebView. Deliberately does not
     * return a response because using eval() to return a response breaks this method
     * on pages with a Content Security Policy that disallows eval(). If you need that
     * functionality, look into postMessage/onMessage.
     */
    injectJavaScript: (data: string) => void;
    /**
     * We return an event with a bunch of fields including:
     *  url, title, loading, canGoBack, canGoForward
     */
    updateNavigationState: (event: any) => void;
    /**
     * Returns the native `WebView` node.
     */
    getWebViewHandle: () => number;
    onLoadingStart: (event: any) => void;
    onLoadingError: (event: any) => void;
    onHttpError: (event: any) => void;
    onLoadingFinish: (event: any) => void;
    onMessage: (event: any) => void;
    onLoadingProgress: (event: any) => void;
    onShouldStartLoadWithRequestCallback: (shouldStart: boolean, _url: string, lockIdentifier: number) => void;
    onContentProcessDidTerminate: (event: any) => void;
    componentDidUpdate(prevProps: IOSWebViewProps): void;
    showRedboxOnPropChanges(prevProps: IOSWebViewProps, propName: keyof IOSWebViewProps): void;
    render(): any;
}
export default WebView;
//# sourceMappingURL=WebView.ios.d.ts.map
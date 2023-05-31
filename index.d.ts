type __file_bundler_options = {
    className?: string
    includePatternPrefixName?: string
    pattern?: "include" | "@?import"
    [k: string]: any
 }

declare class FileBundler {
    private options;
    public readonly includePattern: RegExp;
    public readonly importPattern: RegExp;
    constructor(options: __file_bundler_options);
    bundle(filePathName: string): {
        source: string;
        filePathNames: string[];
    }
    bundleAsync(filePathName: string): Promise<{
        source: string;
        filePathNames: string[];
    }>
}
export = FileBundler

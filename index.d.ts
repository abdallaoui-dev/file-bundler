type __file_bundler_options = {
    className?: string
    includePatternPrefixName?: string
    pattern?: "include" | "@?import"
    [k: string]: any
 }

declare class FileBundler {
    private options;
    constructor(options: __file_bundler_options);
    bundle(filePath: string): {
        source: string;
        filenames: string[];
    }
    bundleAsync(filePath: string): Promise<{
        source: string;
        filenames: string[];
    }>
}
export = FileBundler

import * as React from "react";

interface UseDynamicSVGImportOptions {
    onCompleted?: (name: string, path: string) => void;
    onError?: (err: Error) => void;
}

const useDynamicSVGImport = (name: string) => {
    const ImportedIconRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        const importIcon = async (): Promise<void> => {
            try {
                ImportedIconRef.current = await import(
                    `../../assets/images/icons/icon-${name}.svg`
                );
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name]);

    return { loading, SvgIcon: ImportedIconRef.current };
};

export default useDynamicSVGImport;

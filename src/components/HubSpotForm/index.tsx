import React, { useEffect } from 'react';
import styles from './HubSpot.module.css';

declare global {
    interface Window {
        hbspt: any;
    }
}

type HubSpotFormProps = {
    portalId: string;
    formId: string;
};

export const HubSpotForm: React.FC<HubSpotFormProps> = ({ portalId, formId }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//js.hsforms.net/forms/embed/v2.js`;
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspot-form-container'
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [portalId, formId]);

    return (
        <div id="hubspot-form-container" className={styles.formContainer}>
        </div>
    );
};

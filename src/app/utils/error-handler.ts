export function errorHandler(err: any) {
    if (err) {
        console.log('ERROR:', err);

        this.message.add({
            severity: 'info',
            summary: 'Ops...',
            detail: err && err.message ? err.message : 'Não foi possível completar sua solicitação, tente novamente.'
        });

        this.loader.hide();
    }
};
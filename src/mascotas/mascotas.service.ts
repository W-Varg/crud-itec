import { Injectable } from '@nestjs/common';

@Injectable()
export class mascotasservice {
    create(cabereza: string) {
        console.log(cabereza);

        return `Mascota creada exitosamente`;
    }

    read() {
        return `Se encontro la mascota`;
    }

    update(nombremascota: string) {
        return `La mascota fue actualizada`;
    }

    delete() {
        return `La mascota fue fue eliminada`;
    }
}

import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('sensores')
export class SensoresController {
  
  @Get('ubicacion')
  obtenerUbicacionSimulada() {
    return {
      latitude: 19.4326,  // Coordenadas de ejemplo (CDMX)
      longitude: -99.1332,
      status: 'OK',
      timestamp: new Date().toISOString(),
      googleMapsUrl: `https://www.google.com/maps?q=19.4326,-99.1332`
    };
  }

  @Post('datos')
  recibirDatos(@Body() datos: any) {
    console.log('Datos recibidos del wearable:', datos);
    
    // Agregar la URL de Google Maps dinámica al recibir datos reales
    const response = {
      ...datos,
      googleMapsUrl: `https://www.google.com/maps?q=${datos.latitude},${datos.longitude}`,
      timestamp: new Date().toISOString()
    };

    return { message: 'Datos recibidos correctamente', response };
  }
}

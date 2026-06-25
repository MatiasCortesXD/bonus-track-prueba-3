¿Dónde lo usas en este problema?    

Componente:en app,filtro del tipo,eventocard,lista evento todos los jsx


JSX : estos archivos para crear la interfaz de usuario mediante etiquetas similares a HTML


Props pase los datos de ListaEventos para el  EventoCard y paso tipoSeleccionado/onChangeTipo a FiltroTipo.


Estado (useState) :En App.jsx se utiliza para almacenar y actualizar el tipo de filtro elegido y el texto ingresado en la búsqueda


Renderizado de listas (.map + key): En ListaEventos.jsx se recorre el arreglo de eventos con map() para mostrar cada elemento


Renderizado condicional :en la ListaEventos.jsx aparece el mensaje "No hay eventos que coincidan" cuando no existen resultados, y en EventoCard.jsx se muestra la etiqueta "GRATIS" únicamente si esGratuito tiene el valor true.

 ¿Por qué es el adecuado? 
 Componente: es buena porque permite organizar la aplicación en módulos independientes,como App

 jSX: es adecuado porque permite escribir la interfaz con sintaxis tipo HTML dentro de React

 Props: Son útiles ya que comparten información entre componentes. Gracias a ellas los datos fluyen

 Estado (useState): Se utiliza para gestionar datos que pueden cambiar durante la ejecución

 Renderizado de listas (.map y key): Es adecuado porque permite mostrar múltiples eventos a partir de un arreglo de datos

 Renderizado condicional: Es una solución conveniente para mostrar contenido diferente según determinadas ocaciones
# 🏢 Raul Aguilera RealState - Plataforma Digital

<div align="center">
<img width="1200" height="475" alt="Raul Aguilera RealState" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 📋 Descripción

Portal digital completo para la gestión de propiedades y clientes de Raul Aguilera RealState. Esta plataforma permite a los agentes inmobiliarios gestionar propiedades, clientes y realizar seguimientos de manera eficiente con herramientas de IA integradas.

## ✨ Características Principales

* 🏠 **Gestión de Propiedades**: Catálogo completo con filtros avanzados
* 👥 **Gestión de Clientes**: CRM integrado para seguimiento de leads
* 👨‍💼 **Portal de Agentes**: Dashboard personalizado para agentes inmobiliarios
* 📊 **Panel de Administración**: Herramientas de gestión y análisis
* 🤖 **IA Integrada**: Recomendaciones inteligentes con Gemini AI
* 📱 **Responsive Design**: Optimizado para móviles y tablets
* 💬 **Chatbot**: Asistente virtual para consultas
* 📞 **Integración WhatsApp**: Comunicación directa con clientes

## 🚀 Despliegue en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/halvarez22/Inverlan_new_portal)

### Configuración Automática

1. **Conecta tu repositorio** a Vercel desde GitHub
2. **Configura las variables de entorno**:  
   * `GEMINI_API_KEY`: Tu clave de API de Google Gemini
3. **Despliega**: Vercel detectará automáticamente la configuración

## 🛠️ Desarrollo Local

### Requisitos Previos

* Node.js 18.x o superior
* npm 9.x o superior
* Clave API de Gemini (para funcionalidades de IA)

### Instalación

1. **Clona el repositorio**:  
   ```bash
   git clone https://github.com/halvarez22/Inverlan_new_portal.git
   cd Inverlan_new_portal
   ```

2. **Instala las dependencias**:  
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:  
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` y configura tu `GEMINI_API_KEY`

4. **Inicia el servidor de desarrollo**:  
   ```bash
   npm run dev
   ```

5. **Abre tu navegador** en `http://localhost:3000`

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la construcción
```

## 🏗️ Estructura del Proyecto

```
├── components/           # Componentes reutilizables de React
│   ├── charts/          # Gráficos y visualizaciones
│   ├── AuthContext.tsx  # Contexto de autenticación
│   ├── PropertyContext.tsx # Contexto de propiedades
│   └── ...
├── services/            # Servicios y lógica de negocio
│   └── geminiService.ts # Integración con IA
├── modules/             # Módulos específicos de la aplicación
│   ├── agent_portal/    # Portal de agentes
│   ├── analytics/       # Herramientas de análisis
│   ├── crm/            # Gestión de clientes
│   └── ...
├── images/             # Recursos gráficos
├── types.ts           # Definiciones de TypeScript
└── constants.ts       # Constantes de la aplicación
```

## 🔧 Tecnologías Utilizadas

* **Frontend**: React 19, TypeScript, Vite
* **Styling**: Tailwind CSS
* **IA**: Google Gemini AI
* **Despliegue**: Vercel
* **Gestión de Estado**: React Context API

## 📱 Funcionalidades por Rol

### 👤 Usuario General
* Navegación de propiedades
* Búsqueda inteligente con IA
* Contacto directo
* Chatbot de consultas

### 👨‍💼 Agente Inmobiliario
* Portal personalizado
* Gestión de propiedades asignadas
* Seguimiento de clientes
* Herramientas de análisis

### 👑 Administrador
* Panel de administración completo
* Gestión de usuarios
* Análisis avanzados
* Configuración del sistema

## 🔐 Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | Clave API de Google Gemini | ✅ |
| `WHATSAPP_PHONE_NUMBER` | Número de WhatsApp | ❌ |

## 📄 Licencia

Este proyecto es propiedad de **Raul Aguilera RealState**. Todos los derechos reservados.

## 🤝 Contribución

Para contribuir al proyecto, por favor contacta con el equipo de desarrollo de Raul Aguilera RealState.

---

**Desarrollado con ❤️ para Raul Aguilera RealState**

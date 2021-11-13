import { Controller, Get, Param } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {

    @Get()
    getAll(){
        return []
    }

    @Get('current')
    getCurrent(){
        
    }

    @Get('id')
    getById(@Param('id') id){
        return null;
    }
}

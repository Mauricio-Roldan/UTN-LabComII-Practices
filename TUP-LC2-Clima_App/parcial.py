from mimetypes import init


class vacuna:
    def __init__(self, nombreVacuna, animal, pesoMinimoRecomendado):
        self.nombreVacuna=nombreVacuna
        self.animal=animal
        self.pesoMinimoRecomendado=pesoMinimoRecomendado

    def mostrar(self):
        print("Vacuna = " + self.nombreVacuna)
        print("Animal apto = " + self.animal)
        print("Peso Minimo Recomendado = " + str(self.pesoMinimoRecomendado))

    def validarPesoVacuna(self, animal, peso):
        if (animal.lower() == self.animal.lower()) and (peso>self.pesoMinimoRecomendado):
            return True
        return False

Prueba=vacuna("Python", "Serpiente", 20)
Prueba.mostrar()
print(Prueba.validarPesoVacuna("SERpiente", 25))
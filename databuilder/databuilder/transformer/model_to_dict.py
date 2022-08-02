# Copyright Contributors to the Amundsen project.
# SPDX-License-Identifier: Apache-2.0

<<<<<<< HEAD
import importlib
import logging
=======

import json
>>>>>>> dc/main
from typing import Any, Dict

from pyhocon import ConfigTree

<<<<<<< HEAD
from databuilder.transformer.base_transformer import Transformer
from databuilder.models.elasticsearch_document import ElasticsearchDocument
import json

LOGGER = logging.getLogger(__name__)


class ModelToDict(Transformer):
    """
    Transforms model into dict
=======
from databuilder.models.elasticsearch_document import ElasticsearchDocument
from databuilder.transformer.base_transformer import Transformer


class ModelToDictTransformer(Transformer):
    """
    Transforms model into dictionary.
    For now we are passing it to SearchMetadatatoElasticasearchTask as transformer to
    convert TableESDocument's and UserESDocument's properties to dictionary.
>>>>>>> dc/main
    """

    def init(self, conf: ConfigTree) -> None:
        pass

    def transform(self, record: ElasticsearchDocument) -> Dict[str, Any]:
<<<<<<< HEAD
=======
        """
        Return properties of a ElasticsearchDocument instance (EX: TableESDocument)
        as a dictionary.
        """
>>>>>>> dc/main
        return json.loads(record.to_json())

    def get_scope(self) -> str:
        return 'transformer.model_to_dict'
